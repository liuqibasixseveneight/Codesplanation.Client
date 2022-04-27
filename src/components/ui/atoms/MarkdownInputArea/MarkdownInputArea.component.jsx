import React from 'react';
import PropTypes from 'prop-types';
import MDEditor from '@uiw/react-md-editor';

import { Wrapper } from './MarkdownInputArea.styles';

export default function MarkdownInputArea({ height, name, onChange, value }) {
  return (
    <Wrapper>
      <MDEditor
        height={height ? height : 600}
        name={name}
        onChange={onChange}
        value={value}
      />
    </Wrapper>
  );
}

MarkdownInputArea.propTypes = {
  height: PropTypes.number,
  name: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

MarkdownInputArea.defaultProps = {
  height: null,
  name: '',
  onChange: () => {},
  value: '',
};
