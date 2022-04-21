import styled from 'styled-components';

export const CountText = styled.span`
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  font-size: 1.4rem;
  transition: all 100ms linear;
`;

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100px;
  max-height: 100px;
  min-height: 100px;
  justify-content: center;
  width: 80px;
  max-width: 80px;
  min-width: 80px;

  &:hover {
    & ${CountText} {
      color: ${(props) => props?.theme?.colors?.global?.highlightPrimary};
    }
  }
`;

export const CountWrapper = styled.div`
  align-items: center;
  background: ${(props) => props?.theme?.colors?.global?.backgroundPrimary};
  border: 1px solid
    ${(props) => props?.theme?.colors?.global?.backgroundPrimary};
  border-radius: 8px;
  display: flex;
  height: 55px;
  max-height: 55px;
  min-height: 55px;
  justify-content: center;
  margin: 0 0 0.4rem 0;
  transition: all 100ms linear;
  width: 55px;
  max-width: 55px;
  min-width: 55px;
`;

export const CountLabel = styled.span`
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  font-size: 0.8rem;
  transition: all 100ms linear;
`;
