import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  justify-content: flex-start;
  padding-bottom: 1.4rem;
  width: 100%;
`;

export const HeadingExtrasWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  margin: 0.8rem 0;
`;

export const HeadingWrapper = styled.div`
  align-items: flex-start;
  background: ${(props) => props?.theme?.colors?.global?.backgroundPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0.8rem 0;
  transition: all 100ms linear;
  width: 100%;
`;
