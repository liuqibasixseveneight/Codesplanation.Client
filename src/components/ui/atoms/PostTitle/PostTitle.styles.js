import styled from 'styled-components/macro';

export const StyledHeading = styled.h4`
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  font-size: 1.4rem;
  margin: 0 0 0.4rem 0;
  transition: all 100ms linear;
`;
