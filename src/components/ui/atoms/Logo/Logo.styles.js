import styled, { keyframes } from "styled-components";

const animatedLogoText = keyframes`
  0% { 
    background-position: 10% 0%
  }
  50% { 
    background-position: 91% 100%
  }
  100% {
    background-position: 10% 0%
  }
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const LogoText = styled.span`
  animation: ${animatedLogoText} 12s linear infinite;
  background-clip: text;
  background: linear-gradient(
    90deg,
    ${(props) => props.theme.colors.global.highlightPrimary},
    ${(props) => props.theme.colors.global.highlightSecondary},
    ${(props) => props.theme.colors.global.highlightPrimary}
  );
  background-size: 400% 200%;
  color: ${(props) => props.theme.colors.global.textPrimary};
  cursor: pointer;
  font-family: "RalewayBlack";
  font-size: 2rem;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-transform: lowercase;
  transition: all 100ms linear;
`;
