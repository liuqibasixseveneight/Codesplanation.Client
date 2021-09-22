import styled, { keyframes } from "styled-components";

const homeGradient = keyframes`
  0% { background-position: 0 50% }
  50% { background-position: 100% 50% }
  100% { background-position: 0 50% }
`;

export const Hero = styled.div`
  animation-duration: 10s;
  animation-name: ${homeGradient};
  animation-iteration-count: infinite;
  background: ${(props) => props.theme.colors.global.backgroundPrimary};
  background: linear-gradient(
    -45deg,
    ${(props) => props.theme.colors.global.backgroundPrimary} 15%,
    ${(props) => props.theme.colors.global.highlightPrimary},
    ${(props) => props.theme.colors.global.highlightSecondary}
  );
  background-size: 400% 400%;
  height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  min-height: calc(100vh - 100px);
  position: relative;
  transition: all 100ms linear;
`;

export const HeroText = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;

  & h2 {
    color: ${(props) => props.theme.colors.global.textPrimary};
    font-family: "RalewayBlack", sans-serif;
    font-size: 10vw;
    transition: all 100ms linear;
  }
`;
