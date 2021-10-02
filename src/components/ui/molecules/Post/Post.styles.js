import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  border: 2px solid ${(props) => props.theme.colors.global.highlightPrimary};
  border-radius: 8px;
  display: flex;
  height: 140px;
  margin: 0 0 0.4rem 0;
  padding: 0.8rem;
  transition: all 100ms linear;
  width: 100%;
`;
