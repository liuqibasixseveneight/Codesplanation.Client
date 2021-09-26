import styled from "styled-components";
// import { NavLink } from "react-router-dom";
// const activeClassName = "nav-item-active"; // NavLink: activeClassName

export const Wrapper = styled.div`
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ isNavigationOpen }) =>
    isNavigationOpen ? `translateX(0)` : `translateX(100%)`};
  visibility: ${({ isNavigationOpen }) =>
    isNavigationOpen ? `visible` : `hidden`};
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  width: 100%;
  z-index: 3;
`;

export const WidthWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;

export const SideHeader = styled.div`
  align-items: center;
  border-bottom: 1px solid ${(props) => props.theme.colors.global.textPrimary};
  display: flex;
  height: 100px;
  max-height: 100px;
  min-height: 100px;
  justify-content: space-between;
  transition: all 100ms linear;
  width: 100%;
`;

export const IconWrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  margin-right: 0.8rem;
  transition: all 100ms linear;
  width: 60px;

  &:hover {
    background: ${(props) => props.theme.colors.global.highlightPrimary};
  }

  & svg {
    fill: ${(props) => props.theme.colors.global.textPrimary};
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    stroke: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;
