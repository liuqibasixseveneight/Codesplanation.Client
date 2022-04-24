import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  align-items: center;
  border-bottom: 1px solid
    ${(props) => props?.theme?.colors?.global?.textPrimary};
  display: flex;
  height: 100px;
  max-height: 100px;
  min-height: 100px;
  justify-content: space-between;
  transition: all 100ms linear;
  width: 100%;
`;

export const IconWrapper = styled.div`
  align-items: center;
  background: ${(props) => props?.theme?.colors?.global?.backgroundPrimary};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 60px;
  justify-content: center;
  margin-right: 0.8rem;
  transition: all 100ms linear;
  width: 60px;

  &:hover {
    background: ${(props) => props?.theme?.colors?.global?.highlightPrimary};
  }

  & svg {
    fill: ${(props) => props?.theme?.colors?.global?.textPrimary};
    height: 100%;
    max-height: 100%;
    min-height: 100%;
    stroke: ${(props) => props?.theme?.colors?.global?.textPrimary};
    transition: all 100ms linear;
    width: 100%;
    max-width: 100%;
    min-width: 100%;
  }
`;
