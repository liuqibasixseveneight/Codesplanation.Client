import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  width: 100%;
`;

export const HeadingWrapper = styled.div`
  align-items: flex-start;
  background: ${(props) => props?.theme?.colors?.global?.backgroundPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0.8rem 0;
  transition: all 100ms linear;
`;
