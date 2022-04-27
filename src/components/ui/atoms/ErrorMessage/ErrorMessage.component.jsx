import React from 'react';
import PropTypes from 'prop-types';

import { StyledLi } from './ErrorMessage.styles';

export default function ErrorMessage({ error }) {
  return <StyledLi>{error}</StyledLi>;
}

ErrorMessage.propTypes = {
  error: PropTypes.string.isRequired,
};

ErrorMessage.defaultProps = {
  error: null,
};
