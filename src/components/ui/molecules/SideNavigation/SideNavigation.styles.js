import styled from 'styled-components/macro';

export const Wrapper = styled.div`
  position: sticky;
  position: -webkit-sticky;
  top: 0.8rem;
`;

export const HorizontalBreak = styled.hr`
  background: ${(props) => props?.theme?.colors?.global?.textPrimary};
  border: 0;
  border-radius: 8px;
  height: 1px;
  margin: 0.4rem 0;
  transition: all 100ms linear;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;
