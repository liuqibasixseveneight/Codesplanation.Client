import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import CodeEditor from '@uiw/react-textarea-code-editor';
import PropTypes from 'prop-types';

import { Wrapper } from './CodeInputArea.styles';

export default function CodeInputArea({
  language,
  padding,
  placeholder,
  style,
}) {
  const isGlobalThemeDark = useSelector((state) => {
    if (state.globalTheme) {
      return state.globalTheme.isGlobalThemeDark;
    }
  });

  const textRef = useRef();
  const [code, setCode] = useState(
    `
      export const MyComponent = () => {
        return (
          <div style={{ color: 'red', fontSize: '24px' }}>
            <h1>Hello, world!</h1>
          </div>
        );
      };
    `
  );

  return (
    <Wrapper
      data-color-mode={isGlobalThemeDark ? 'dark' : 'light'}
      style={{ transition: 'all 100ms linear' }}
    >
      <CodeEditor
        value={code}
        ref={textRef}
        language={language}
        placeholder={placeholder}
        onChange={(event) => setCode(event.target.value)}
        padding={padding}
        style={{
          fontFamily:
            'ui-monospace,SFMono-Regular,SF Mono,Consolas,Liberation Mono,Menlo,monospace',
          fontSize: 12,
          transition: 'all 100ms linear',
          ...style,
        }}
      />
    </Wrapper>
  );
}

CodeInputArea.propTypes = {
  language: PropTypes.string,
  padding: PropTypes.number,
  placeholder: PropTypes.string,
  style: PropTypes.object,
};

CodeInputArea.defaultProps = {
  language: '',
  padding: 15,
  placeholder: '',
  style: {},
};
