import { HeaderContainer, CustomNavLink } from './styles';

import logo from '../../assets/logo.svg';
import cartIcon from '../../assets/cart-icon.svg';
import pinIcon from '../../assets/pin-icon.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const { cart } = useContext(CartContext);

  return (
    <HeaderContainer>
      <CustomNavLink to="/" title="Início">
        <img src={logo} alt="Logo representando um café com um foguete." />
      </CustomNavLink>

      <nav>
        <CustomNavLink to="/checkout" title="Endereço" type="location">
          <img src={pinIcon} alt="Um ícone de localização" />
          Porto Alegre, RS
        </CustomNavLink>
        <CustomNavLink
          to="/checkout"
          title="Carrinho"
          type="cart"
          quantity={cart.totalQuantity}
        >
          <img src={cartIcon} alt="Um ícone de carrinho de compras" />
        </CustomNavLink>
      </nav>
    </HeaderContainer>
  );
}
