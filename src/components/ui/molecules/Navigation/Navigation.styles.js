import styled from "styled-components";

export const Wrapper = styled.nav`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: ${({ margin }) => margin && margin};
  padding: ${({ padding }) => padding && padding};
  transition: all 100ms linear;
`;
