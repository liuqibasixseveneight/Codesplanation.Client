import styled from "styled-components/macro";

export const Wrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundSecondary};
  border: 2px solid ${(props) => props.theme.colors.global.backgroundSecondary};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 100px;
  margin: 0 0 0.4rem 0;
  padding: 0.4rem;
  transition: all 100ms linear;
  width: 100%;

  &:hover {
    border: 2px solid ${(props) => props.theme.colors.global.highlightPrimary};
  }
`;
