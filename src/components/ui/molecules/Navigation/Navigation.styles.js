import styled from "styled-components/macro";

export const Wrapper = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: ${({ isVertical }) => (isVertical ? "column" : "row")};
  justify-content: center;
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
  transition: all 100ms linear;
`;
