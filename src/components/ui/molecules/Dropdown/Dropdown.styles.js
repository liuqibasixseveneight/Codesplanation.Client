import styled from "styled-components";

export const HorizontalBreak = styled.hr`
  background: ${(props) => props.theme.colors.global.textPrimary};
  border: 0;
  border-radius: 8px;
  height: 1px;
  margin: 0.4rem 0;
  transition: all 100ms linear;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

export const Wrapper = styled.ul`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  border: 1px solid ${(props) => props.theme.colors.global.highlightPrimary};
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: ${({ height }) => height && height};
  justify-content: flex-start;
  overflow: hidden;
  padding: 0.8rem;
  position: absolute;
  /* right: ${({ left }) => (left ? null : "0.8rem")}; */
  right: 0.8rem;
  top: calc(100px + 0.8rem);
  transition: all 100ms linear, height 500ms ease;
  width: 250px;
  z-index: 1;
  left: ${({ left }) => (left ? "0.8rem" : null)};
`;
