import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeading } from './PostSubtitle.styles';

export default function PostSubtitle({ subtitle }) {
  return <StyledHeading>{subtitle}</StyledHeading>;
}

PostSubtitle.propTypes = {
  subtitle: PropTypes.string,
};

PostSubtitle.defaultProps = {
  subtitle: '',
};
