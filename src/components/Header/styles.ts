import { NavLink, NavLinkProps } from 'react-router-dom';
import styled, { css } from 'styled-components';

interface CustomNavLinkProps
  extends React.ForwardRefExoticComponent<
    NavLinkProps & React.RefAttributes<HTMLAnchorElement>
  > {
  quantity: number;
}

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-top: 3.2rem;
  padding-bottom: 3.2rem;

  img {
    cursor: pointer;
  }

  nav {
    display: flex;
    gap: 1.2rem;

    a {
      display: flex;
      align-items: center;

      padding: 0.8rem;
      border-radius: 6px;

      font-size: 1.4rem;
      line-height: 1.82rem;
      text-decoration: none;
    }
  }
`;

export const CustomNavLink = styled<CustomNavLinkProps>(NavLink)`
  ${(props) =>
    props.type === 'location' &&
    css`
      background-color: ${({ theme }) => theme.colors['purple-light']};
      color: ${({ theme }) => theme.colors['purple-dark']};

      img {
        margin-right: 0.4rem;
      }
    `}

  ${(props) =>
    props.type === 'cart' &&
    css`
      position: relative;
      background-color: ${({ theme }) => theme.colors['yellow-light']};

      svg {
        fill: ${({ theme }) => theme.colors['yellow-dark']};
      }

      &::after {
        content: '${props.quantity}';

        display: flex;
        justify-content: center;
        align-items: center;

        position: absolute;
        top: -8px;
        right: -8.35px;

        width: 20px;
        height: 20px;
        border-radius: 1000px;

        background-color: ${({ theme }) => theme.colors['yellow-dark']};
        color: ${({ theme }) => theme.colors['white']};

        z-index: 1;
      }
    `}
`;
