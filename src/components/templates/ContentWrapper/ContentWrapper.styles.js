import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0.8rem 2.2rem;
  width: 100%;
  min-width: 100%;

  @media screen and (max-width: 1026px) {
    padding: 0.8rem;
  }
`;
