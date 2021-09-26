import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
const activeClassName = "nav-items-active"; // NavLink: activeClassName

export const Border = styled.div`
  align-items: center;

  ${({ border }) => {
    switch (true) {
      case border:
        return css`
          border: 2px solid
            ${(props) => props.theme.colors.global.highlightSecondary};
          color: ${(props) => props.theme.colors.global.highlightSecondary};
        `;
      default:
        return css`
          border: none;
          color: ${(props) => props.theme.colors.global.textPrimary};
        `;
    }
  }}

  border-radius: 4px;
  cursor: pointer;
  display: flex;
  font-family: "RalewaySemiBold";
  font-weight: 600;
  height: 100%;
  justify-content: center;
  padding: 0.8rem 1.4rem;
  margin: 0 0.4rem;
  text-transform: capitalize;
  transition: all 100ms linear;
  width: auto;

  &:last-of-type {
    margin: 0 0 0 0.4rem;
  }

  &:hover {
    background: ${(props) => props.theme.colors.global.highlightPrimary};
    color: ${(props) => props.theme.colors.global.highlightSecondary};
  }
`;

export const Wrapper = styled(NavLink).attrs({ activeClassName })``;
