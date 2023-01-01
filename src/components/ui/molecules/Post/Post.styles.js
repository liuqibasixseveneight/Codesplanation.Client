import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  align-items: center;
  background: ${(props) => props?.theme?.colors?.global?.backgroundSecondary};
  border: 2px solid
    ${(props) => props?.theme?.colors?.global?.backgroundSecondary};
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  height: 100px;
  margin: 0 0 0.4rem 0;
  padding: 0.4rem;
  transition: all 100ms linear;
  width: 100%;

  &:hover {
    border: 2px solid
      ${(props) => props?.theme?.colors?.global?.highlightPrimary};
  }
`;

export const DetailsWrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  margin-left: 0.8rem;
`;

export const Username = styled.div`
  color: ${(props) => props?.theme?.colors?.global?.textTertiary};
  display: flex;
  font-size: 0.8rem;
  transition: all 100ms linear;
`;
