import styled from 'styled-components/macro';

export const StyledHeading = styled.h5`
  color: ${(props) => props?.theme?.colors?.global?.textSecondary};
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.8rem 0;
  transition: all 100ms linear;
`;
