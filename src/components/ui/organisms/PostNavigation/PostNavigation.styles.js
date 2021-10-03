import styled from "styled-components/macro";

export const Wrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  border-right: 1px solid
    ${(props) => props.theme.colors.global.highlightPrimary};
  display: flex;
  grid-area: navigation;
  flex-direction: column;
  height: 100%;
  min-height: calc(100vh - 100px);
  justify-content: flex-start;
  transition: all 100ms linear;
  width: 240px;
`;

export const NavigationWrapper = styled.div`
  height: 100%;
  padding: 0.8rem;
  width: 100%;
`;
