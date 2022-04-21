import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './ContentWrapper.styles';

export default function ContentWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Text.propTypes = {
  // What should be rendered?
  children: PropTypes.node.isRequired,
};

Text.defaultProps = {
  children: null,
};
