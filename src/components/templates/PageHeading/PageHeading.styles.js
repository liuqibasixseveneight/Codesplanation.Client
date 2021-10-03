import styled from "styled-components/macro";

export const Wrapper = styled.div`
  align-items: flex-start;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 0 0.8rem 0;
  transition: all 100ms linear;
  width: 100%;
`;
