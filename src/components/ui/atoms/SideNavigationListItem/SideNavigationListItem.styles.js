import styled from "styled-components/macro";

export const StyledListItem = styled.li`
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  font-family: "RalewayMedium";
  font-weight: 500;
  padding: 0.4rem;
  transition: all 100ms linear;

  &:hover {
    color: ${(props) => props.theme.colors.global.highlightPrimary};
  }
`;
