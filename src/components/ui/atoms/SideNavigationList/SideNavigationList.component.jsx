import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './SideNavigationList.styles';

export default function SideNavigationList({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

SideNavigationList.propTypes = {
  // What represents the children?
  children: PropTypes.node.isRequired,
};

SideNavigationList.defaultProps = {
  children: null,
};
