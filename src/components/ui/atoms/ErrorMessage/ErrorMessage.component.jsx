import React from 'react';
import PropTypes from 'prop-types';

import { StyledLi } from './ErrorMessage.styles';

export default function ErrorMessage({ error }) {
  return <StyledLi>{error}</StyledLi>;
}

ErrorMessage.propTypes = {
  // What represents the error?
  error: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
  error: null,
};
