import React from 'react';
import PropTypes from 'prop-types';

import { StyledHeading } from './PostTitle.styles';

export default function PostTitle({ title }) {
  return <StyledHeading>{title}</StyledHeading>;
}

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
};

PostTitle.defaultProps = {
  title: null,
};
