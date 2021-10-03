import styled from "styled-components/macro";

export const Wrapper = styled.div`
  align-items: center;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 0.8rem 2.2rem;
  transition: all 100ms linear;
  width: 100%;
`;
