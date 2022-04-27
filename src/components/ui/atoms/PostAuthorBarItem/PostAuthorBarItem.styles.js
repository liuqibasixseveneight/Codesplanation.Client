import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  margin-right: 0.8rem;
`;

export const Label = styled.span`
  color: ${(props) => props?.theme?.colors?.global?.textSecondary};
  transition: all 100ms linear;
`;

export const Data = styled.span`
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  font-weight: 500;
  transition: all 100ms linear;
`;

export const DataLink = styled(NavLink)`
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  font-weight: 500;
  transition: all 100ms linear;

  &:hover {
    color: ${(props) => props?.theme?.colors?.global?.highlightPrimary};
  }
`;
