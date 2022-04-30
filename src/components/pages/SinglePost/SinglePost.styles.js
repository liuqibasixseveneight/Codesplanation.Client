import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${(props) => props?.theme?.colors?.global?.backgroundPrimary};
  display: grid;
  grid-template-areas: 'navigation content';
  grid-template-columns: 240px auto;
  height: 100%;
  min-height: calc(100vh - 100px);
  transition: all 100ms linear;
  width: 100%;
  min-width: 100%;
`;

export const Content = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  grid-area: content;
  justify-content: flex-start;
  width: 100%;
`;
