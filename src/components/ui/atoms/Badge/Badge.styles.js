import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  align-items: center;
  appearance: none;
  -webkit-appearance: none;
  background: ${({ backgroundColor, ...props }) =>
    backgroundColor ?? props?.theme?.colors?.global?.highlightPrimary};
  border: 0;
  border-radius: 4px;
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  display: flex;
  justify-content: center;
  padding: 0.6rem 0.8rem;
  text-transform: capitalize;
  transition: all 100ms linear;
  white-space: nowrap;

  & svg {
    fill: white;
    height: 16px;
    max-height: 16px;
    margin-right: 0.4rem;
    transition: all 100ms linear;
    width: auto;
  }
`;
