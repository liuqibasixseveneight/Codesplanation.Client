import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './SideNavigationSection.styles';

export default function SideNavigationSection({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

SideNavigationSection.propTypes = {
  // What represents the children?
  children: PropTypes.node.isRequired,
};

SideNavigationSection.defaultProps = {
  children: null,
};
