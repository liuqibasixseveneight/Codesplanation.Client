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
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
  text: PropTypes.node.isRequired,
};

SideNavigationListItem.defaultProps = {
  leftIcon: null,
  onClick: null,
  text: null,
};
