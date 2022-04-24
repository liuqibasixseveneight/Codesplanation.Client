import React from 'react';
import PropTypes from 'prop-types';

import {
  LeftIcon,
  StyledListItem,
  Text,
} from './SideNavigationListItem.styles';

export default function SideNavigationListItem({ leftIcon, onClick, text }) {
  return (
    <StyledListItem onClick={onClick} leftIcon={leftIcon}>
      <LeftIcon>{leftIcon}</LeftIcon>
      <Text>{text}</Text>
    </StyledListItem>
  );
}

SideNavigationListItem.propTypes = {
  // Does the item need a left icon?
  leftIcon: PropTypes.node,
  // Set an optional click handler?
  onClick: PropTypes.func,
  // What text should be rendered?
  text: PropTypes.node.isRequired,
};

SideNavigationListItem.defaultProps = {
  leftIcon: null,
  onClick: null,
  text: null,
};
