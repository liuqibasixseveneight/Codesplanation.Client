import styled, { css } from 'styled-components/macro';
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
  font-weight: 600;
  transition: all 100ms linear;

  ${({ data }) => {
    switch (true) {
      case data === 'beginner':
        return css`
          color: ${(props) => props?.theme?.colors?.difficulty?.beginner};
        `;
      case data === 'easy':
        return css`
          color: ${(props) => props?.theme?.colors?.difficulty?.easy};
        `;
      case data === 'normal':
        return css`
          color: ${(props) => props?.theme?.colors?.difficulty?.normal};
        `;
      case data === 'hard':
        return css`
          color: ${(props) => props?.theme?.colors?.difficulty?.hard};
        `;
      case data === 'very hard':
        return css`
          color: ${(props) => props?.theme?.colors?.difficulty?.veryHard};
        `;
      default:
        return css`
          color: ${(props) => props?.theme?.colors?.difficulty?.textPrimary};
        `;
    }
  }}
`;

export const DataLink = styled(NavLink)`
  color: ${(props) => props?.theme?.colors?.links?.linkPrimary};
  font-weight: 600;
  transition: all 100ms linear;

  &:hover {
    color: ${(props) => props?.theme?.colors?.links?.linkPrimaryHover};
  }
`;
