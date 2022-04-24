import styled, { css } from 'styled-components';

export const StyledAnchor = styled.a`
  cursor: pointer;

  ${({ size }) => {
    switch (true) {
      case size === 'small':
        return css`
          font-size: 0.8rem;
        `;
      case size === 'medium':
        return css`
          font-size: 1rem;
        `;
      case size === 'large':
        return css`
          font-size: 1.4rem;
        `;
      default:
        return css`
          font-size: 1rem;
        `;
    }
  }}

  &:hover {
    text-decoration: none;
  }
`;
