import styled, { css } from 'styled-components';

export const StyledButton = styled.button`
  align-items: center;
  appearance: none;
  -webkit-appearance: none;
  background: ${(props) =>
    props.backgroundColor
      ? props.backgroundColor
      : props.theme.colors.global.backgroundPrimary};
  border: 0;
  border-radius: 4px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  padding: 0.4rem 0.8rem;
  text-transform: capitalize;
  transition: all 100ms linear;
  white-space: nowrap;

  ${({ size }) => {
    switch (true) {
      case size === 'small':
        return css`
          font-size: 0.8rem;
          padding: 0.4rem 0.8rem;
        `;
      case size === 'medium':
        return css`
          font-size: 1rem;
        `;
      case size === 'large':
        return css`
          font-size: 1.4rem;
          padding: 0.4rem 0.8rem;
        `;
      default:
        return css`
          font-size: 1rem;
        `;
    }
  }}

  &:disabled, &[disabled] {
    background: #f7f7f7;
    color: #aeaeae;
    cursor: default;

    & svg {
      fill: #aeaeae;
    }
  }

  &:hover {
    filter: brightness(90%);
  }

  & svg {
    fill: white;
    height: 16px;
    max-height: 16px;
    margin-right: 0.4rem;
    transition: all 100ms linear;
    width: auto;

    ${({ size }) => {
      switch (true) {
        case size === 'small':
          return css`
            height: 12px;
            max-height: 12px;
          `;
        case size === 'medium':
          return css`
            height: 16px;
            max-height: 16px;
          `;
        case size === 'large':
          return css`
            height: 20px;
            max-height: 20px;
          `;
        default:
          return css`
            height: 16px;
            max-height: 16px;
          `;
      }
    }}
  }
`;
