import styled from "styled-components/macro";
import { Link } from "react-router-dom";

export const Wrapper = styled.div``;

export const StyledLink = styled(Link)``;

export const StyledText = styled.h4`
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  font-family: "RalewaySemiBold", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0 0 0.4rem 0;
  transition: all 100ms linear;

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
  }
`;
