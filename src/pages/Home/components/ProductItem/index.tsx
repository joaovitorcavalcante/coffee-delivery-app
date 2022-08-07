import { useContext, useReducer } from 'react';
import { CartContext } from '../../../../contexts/CartContext';
import {
  decrementAction,
  incrementAction,
} from '../../../../reducers/quantity/actions';
import { quantityReducer } from '../../../../reducers/quantity/reducer';

import { ProductItemContainer } from './styles';

type ProductItemProps = {
  id: string;
  name: string;
  description: string;
  image: string;
  categories: Array<string>;
  price: number;
};

export function ProductItem({
  id,
  name,
  description,
  image,
  categories,
  price,
}: ProductItemProps) {
  const { addNewCartItem } = useContext(CartContext);

  const [quantity, dispatch] = useReducer(quantityReducer, 1);

  function handleAddNewCartItem() {
    console.log(addNewCartItem);

    addNewCartItem({ id, name, quantity, price });
  }

  return (
    <ProductItemContainer>
      <img src={`./src/assets/coffees/${image}`} />

      <div>
        {categories.map((category) => (
          <span>{category}</span>
        ))}
      </div>

      <h3>{name}</h3>
      <p>{description}</p>

      <footer>
        <p>
          R$ <strong>{price.toFixed(2)}</strong>
        </p>

        <button onClick={() => dispatch(decrementAction())}>-</button>
        <span>{quantity}</span>
        <button onClick={() => dispatch(incrementAction())}>+</button>
        <button onClick={handleAddNewCartItem}>add-to-cart</button>
      </footer>
    </ProductItemContainer>
  );
}
