import styled from 'styled-components';

export const ProductItemContainer = styled.div`
  max-width: 256px;

  padding: 2rem 2.4rem;

  background-color: ${({ theme }) => theme.colors.card};
  border-radius: 6px 36px;

  img {
    position: relative;
    display: block;
    margin: 0 auto;

    top: -40px;
  }

  div {
    display: flex;
    justify-content: center;

    margin-top: -20px;

    gap: 0.2rem;
  }

  span {
    display: inline-block;

    padding: 0.4rem 0.8rem;
    margin-top: 0.8rem;
    border-radius: 100px;

    text-transform: uppercase;

    background-color: ${({ theme }) => theme.colors['yellow-light']};
    color: ${({ theme }) => theme.colors['yellow-dark']};
  }

  h3 {
    margin-top: 1.6rem;

    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 2.6rem;

    text-align: center;

    color: ${({ theme }) => theme.colors.subtitle};
  }

  & > p {
    margin-top: 0.8rem;

    font-size: 1.4rem;
    line-height: 1.82rem;

    text-align: center;

    color: ${({ theme }) => theme.colors.label};
  }

  footer {
    margin-top: 3.3rem;

    color: ${({ theme }) => theme.colors.text};
  }

  footer p {
    font-size: 1.4rem;
    line-height: 1.82rem;
  }

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2.4rem;
    line-height: 3.1rem;
  }

  /* button {
    padding: 1.06rem 1.26rem 1.06rem 0.8rem;
    border: 0;
    border-radius: 6px;

    background-color: ${({ theme }) => theme.colors['purple-dark']};

    cursor: pointer;
  } */
`;
