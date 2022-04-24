import styled from 'styled-components/macro';

export const StyledUl = styled.ul`
  align-items: center;
  background: ${(props) => props?.theme?.colors?.global?.backgroundPrimary};
  border: 2px solid tomato;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0.8rem;
  padding: 0.8rem;
`;
