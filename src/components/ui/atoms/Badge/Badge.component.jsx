import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Badge.styles';

export default function Badge({ icon, text }) {
  return (
    <Wrapper text={text}>
      {icon}
      {text}
    </Wrapper>
  );
}

Badge.propTypes = {
  icon: PropTypes.element,
  text: PropTypes.string.isRequired,
};

Badge.defaultProps = {
  icon: null,
  text: '',
};
