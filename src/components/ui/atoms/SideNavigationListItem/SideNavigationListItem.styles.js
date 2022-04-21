import styled from 'styled-components/macro';

export const LeftIcon = styled.span`
  align-items: center;
  display: flex;
  justify-content: center;

  & svg {
    fill: ${(props) => props?.theme?.colors?.global?.textPrimary};
    height: 20px;
    max-height: 20px;
    min-height: 20px;
    margin-right: 0.4rem;
    stroke: ${(props) => props?.theme?.colors?.global?.textPrimary};
    transition: all 100ms linear;
    width: 20px;
    max-width: 20px;
    min-width: 20px;
  }
`;

export const Text = styled.span`
  align-items: center;
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  display: flex;
  flex: 1;
  font-family: 'RalewayMedium';
  font-weight: 500;
  justify-content: flex-start;
  transition: all 100ms linear;
`;

export const StyledListItem = styled.li`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: ${({ leftIcon }) => (leftIcon ? 'flex-start' : 'center')};
  padding: 0.4rem;
  transition: all 100ms linear;

  &:hover {
    & ${LeftIcon} {
      & svg {
        fill: ${(props) => props?.theme?.colors?.global?.highlightPrimary};
        stroke: ${(props) => props?.theme?.colors?.global?.highlightPrimary};
      }
    }

    & ${Text} {
      color: ${(props) => props?.theme?.colors?.global?.highlightPrimary};
    }
  }
`;
