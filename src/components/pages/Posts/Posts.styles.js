import styled from "styled-components/macro";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  display: grid;
  grid-template-areas: "navigation content";
  grid-template-columns: 240px auto;
  height: 100%;
  min-height: calc(100vh - 100px);
  transition: all 100ms linear;
  width: 100%;

  @media screen and (max-width: 1026px) {
    grid-template-columns: 0 auto;
  }
`;

export const Content = styled.div`
  grid-area: content;
`;
