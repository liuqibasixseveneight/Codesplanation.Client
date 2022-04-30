import React from 'react';
import PropTypes from 'prop-types';

import {
  LeftIcon,
  ListItem,
  RightIcon,
  StyledSpan,
  Text,
  Wrapper,
} from './DropdownItem.styles';

export default function DropdownItem({
  children,
  leftIcon,
  navlink,
  onClick,
  rightIcon,
  to,
}) {
  if (!navlink) {
    return (
      <StyledSpan onClick={onClick} to={to}>
        <ListItem leftIcon={leftIcon} rightIcon={rightIcon}>
          <LeftIcon>{leftIcon && leftIcon}</LeftIcon>
          <Text>{children}</Text>
          <RightIcon>{rightIcon && rightIcon}</RightIcon>
        </ListItem>
      </StyledSpan>
    );
  }

  return (
    <>
      <Wrapper onClick={onClick} to={to}>
        <ListItem leftIcon={leftIcon} rightIcon={rightIcon}>
          <LeftIcon>{leftIcon && leftIcon}</LeftIcon>
          <Text>{children}</Text>
          <RightIcon>{rightIcon && rightIcon}</RightIcon>
        </ListItem>
      </Wrapper>
    </>
  );
}

DropdownItem.propTypes = {
  children: PropTypes.node.isRequired,
  leftIcon: PropTypes.node,
  navlink: PropTypes.bool,
  onClick: PropTypes.func,
  rightIcon: PropTypes.node,
  to: PropTypes.string,
};

DropdownItem.defaultProps = {
  children: null,
  leftIcon: null,
  navlink: false,
  onClick: null,
  rightIcon: null,
  to: '/',
};
