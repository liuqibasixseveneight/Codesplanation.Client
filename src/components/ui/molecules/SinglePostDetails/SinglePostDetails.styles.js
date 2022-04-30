import styled from 'styled-components/macro';
import MDEditor from '@uiw/react-md-editor';

export const Wrapper = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 100%;
`;

export const MarkdownWrapper = styled.div`
  transition: all 100ms linear !important;
  margin-top: 0.8rem;

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span,
  em,
  strong {
    color: ${(props) => props?.theme?.colors?.global?.textPrimary};
    transition: all 100ms linear;
  }

  & h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    border-bottom: ${(props) =>
      `1px solid ${props?.theme?.colors?.global?.backgroundPrimary}`};
    transition: all 100ms linear;
  }

  & hr {
    background-color: ${(props) =>
      props?.theme?.colors?.global?.backgroundPrimary};
    transition: all 100ms linear;
  }

  & pre {
    background: ${(props) => props?.theme?.colors?.global?.backgroundTertiary};
    transition: all 100ms linear;
  }
`;

export const MarkdownStyles = styled.div`
  background-color: ${(props) =>
    props?.theme?.colors?.global?.backgroundSecondary};
  transition: all 100ms linear;
`;

export const StyledMDEditor = styled(MDEditor?.Markdown)`
  background-color: ${(props) =>
    props?.theme?.colors?.global?.backgroundSecondary};
  border-radius: 8px;
  padding: 1.2rem;
  transition: all 100ms linear;
`;
