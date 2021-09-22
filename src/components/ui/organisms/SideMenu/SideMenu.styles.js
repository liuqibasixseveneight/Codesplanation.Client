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
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;
  max-width: 1400px;
`;
