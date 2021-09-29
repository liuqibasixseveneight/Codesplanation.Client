import styled from "styled-components";

export const Wrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0.8rem;
  transition: all 100ms linear;
  width: 100%;
`;