import { createContext, ReactNode, useState } from 'react';
import { produce } from 'immer';

type CartContextProviderProps = {
  children: ReactNode;
};

type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type CartContextData = {
  products: Product[];
  totalPrice: number;
  totalQuantity: number;
};

type CartContextType = {
  cart: CartContextData;
  addNewCartItem: (product: Product) => void;
  removeOneItem: (productId: string) => void;
};

export const CartContext = createContext({} as CartContextType);

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<CartContextData>({
    products: [],
    totalPrice: 0,
    totalQuantity: 0,
  });

  function addNewCartItem(product: Product) {
    const cartUpdated = produce(cart, (draft) => {
      const currentProductIndex = draft.products.findIndex(
        (item) => item.id === product.id
      );
      if (currentProductIndex < 0) {
        draft.products.push(product);
      } else {
        draft.products[currentProductIndex].quantity = product.quantity;
      }

      const total = draft.products.reduce(
        (acc, current) => {
          acc.totalPrice += current.price * current.quantity;
          acc.totalQuantity += current.quantity;

          return acc;
        },
        { totalPrice: 0, totalQuantity: 0 }
      );

      draft.totalPrice = total.totalPrice;
      draft.totalQuantity = total.totalQuantity;
    });

    setCart(cartUpdated);
    console.log(cart);
  }

  function removeOneItem(productId: string) {
    // ...
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addNewCartItem,
        removeOneItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
