import styled from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-items-active"; // NavLink: activeClassName

export const Wrapper = styled(NavLink).attrs({ activeClassName })`
  color: ${(props) => props.theme.colors.global.textPrimary};
  fill: ${(props) => props.theme.colors.global.textPrimary};
  stroke: ${(props) => props.theme.colors.global.textPrimary};
  transition: all 100ms linear;
  width: 100%;
  min-width: 100%;
`;

export const ListItem = styled.li`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  border-radius: 8px;
  display: flex;
  height: 50px;
  justify-content: ${({ leftIcon, rightIcon }) =>
    leftIcon && rightIcon ? "space-between" : "flex-start"};
  padding: 0.5rem;
  transition: all 100ms linear;
  width: 100%;
  min-width: 100%;

  &:hover {
    background: ${(props) => props.theme.colors.global.highlightPrimary};
  }
`;

export const LeftIcon = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;

  & svg {
    fill: ${(props) => props.theme.colors.global.textPrimary};
    height: 25px;
    max-height: 25px;
    min-height: 25px;
    margin-right: 0.8rem;
    width: 25px;
    max-width: 25px;
    min-width: 25px;
    stroke: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;
  }
`;

export const Text = styled.span`
  align-items: center;
  color: ${(props) => props.theme.colors.global.textPrimary};
  display: flex;
  flex: 1;
  font-family: "RalewayMedium";
  font-weight: 500;
  justify-content: flex-start;
  transition: all 100ms linear;
`;

export const RightIcon = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;
  transition: all 100ms linear;

  & svg {
    fill: ${(props) => props.theme.colors.global.textPrimary};
    height: 25px;
    max-height: 25px;
    min-height: 25px;
    margin-right: 0.8rem;
    width: 25px;
    max-width: 25px;
    min-width: 25px;
    stroke: ${(props) => props.theme.colors.global.textPrimary};
    transition: all 100ms linear;
  }
`;
