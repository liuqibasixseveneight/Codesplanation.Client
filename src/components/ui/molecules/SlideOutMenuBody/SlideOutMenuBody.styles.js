import styled from 'styled-components/macro';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  align-items: center;
  background: ${(props) => props?.theme?.colors?.global?.backgroundPrimary};
  display: flex;
  flex-direction: column;
  height: calc(100vh - 100px);
  max-height: calc(100vh - 100px);
  min-height: calc(100vh - 100px);
  justify-content: flex-start;
  transition: all 100ms linear;
  width: 100%;
  max-width: 100%;
  min-width: 100%;
`;

export const Heading = styled.h2`
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  font-family: 'RalewayBold';
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0.8rem;
  padding: 8vh 0;
  transition: all 100ms linear;
`;

export const StyledLink = styled(Link)`
  color: ${(props) => props?.theme?.colors?.global?.highlightPrimary};
  font-family: 'RalewayExtraBold';
  font-size: 2rem;
  font-weight: 800;
  transition: all 100ms linear;
`;

export const NavigationWrapper = styled.div`
  border: 2px solid ${(props) => props?.theme?.colors?.global?.highlightPrimary};
  border-radius: 8px;
  padding: 0.8rem;
  transition: all 100ms linear;
`;
