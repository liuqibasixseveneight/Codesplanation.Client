import React from 'react';
import PropTypes from 'prop-types';

import {
  LeftIcon,
  StyledListItem,
  Text,
} from './SideNavigationListItem.styles';

export default function SideNavigationListItem({
  isLink,
  leftIcon,
  onClick,
  text,
}) {
  if (isLink) {
    return (
      <StyledListItem onClick={onClick} leftIcon={leftIcon}>
        <LeftIcon>{leftIcon}</LeftIcon>
        <Text>{text}</Text>
      </StyledListItem>
    );
  }

  return (
    <StyledListItem onClick={onClick} leftIcon={leftIcon}>
      <LeftIcon>{leftIcon}</LeftIcon>
      <Text>{text}</Text>
    </StyledListItem>
  );
}

SideNavigationListItem.propTypes = {
  isLink: PropTypes.bool,
  leftIcon: PropTypes.node,
  onClick: PropTypes.func,
  text: PropTypes.node.isRequired,
};

SideNavigationListItem.defaultProps = {
  isLink: false,
  leftIcon: null,
  onClick: null,
  text: null,
};
