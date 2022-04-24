import styled from 'styled-components/macro';

export const UserAvatar = styled.div`
  background: #c1c1c1;
  border-radius: 50%;
  content: '';
  height: 45px;
  max-height: 45px;
  min-height: 45px;
  margin: 0 0.8rem 0 0;
  padding: 0 0.4rem;
  width: 45px;
  max-width: 45px;
  min-width: 45px;
`;

export const UserText = styled.span`
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  font-size: 1.6rem;
  font-family: 'RalewayBold';
  font-weight: 700;
  transition: all 100ms linear;
`;

export const Wrapper = styled.div`
  align-items: center;
  background: ${({ isDropdownOpen }) =>
    isDropdownOpen
      ? (props) => props?.theme?.colors?.global?.highlightPrimary
      : (props) => props?.theme?.colors?.global?.backgroundPrimary};
  border-radius: 4px;
  color: ${(props) => props?.theme?.colors?.global?.textPrimary};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  padding: 0.8rem 1.4rem;
  position: relative;
  margin: 0 0.4rem;
  transition: all 100ms linear;
  width: auto;

  &:hover {
    background: ${(props) => props?.theme?.colors?.global?.highlightPrimary};

    & ${UserText} {
      color: ${(props) => props?.theme?.colors?.global?.highlightSecondary};
    }
  }
`;
