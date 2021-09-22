import styled from "styled-components";

export const Wrapper = styled.div`
  border-bottom: 1px solid
    ${(props) => props.theme.colors.global.highlightPrimary};
  height: 100px;
  max-height: 100px;
  min-height: 100px;
  transition: all 100ms linear;
  width: 100%;
`;

export const WidthWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;
  max-width: 1400px;
`;

export const LogoWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
`;

export const NavigationSpacer = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
