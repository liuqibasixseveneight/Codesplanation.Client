import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  background: ${(props) => props?.theme?.colors?.global?.backgroundPrimary};
  height: 100vh;
  max-height: 100vh;
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 0;
  transform: ${({ isSlideOutMenuOpen }) =>
    isSlideOutMenuOpen ? `translateX(0)` : `translateX(100%)`};
  visibility: ${({ isSlideOutMenuOpen }) =>
    isSlideOutMenuOpen ? `visible` : `hidden`};
  transition: transform 0.3s ease-in-out, visibility 0.3s ease-in-out;
  width: 100%;
  z-index: 3;
`;

export const WidthWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  width: 100%;
`;
