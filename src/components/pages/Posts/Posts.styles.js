import styled from "styled-components";

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100%;
  min-height: calc(100vh - 100px);
  position: relative;
  transition: all 100ms linear;
  width: 100%;
`;
