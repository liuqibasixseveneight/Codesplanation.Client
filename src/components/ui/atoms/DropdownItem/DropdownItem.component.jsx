import React from "react";
import PropTypes from "prop-types";

import {
  LeftIcon,
  ListItem,
  RightIcon,
  StyledSpan,
  Text,
  Wrapper,
} from "./DropdownItem.styles";

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
  // What represents the children?
  children: PropTypes.node.isRequired,
  // Does the item need a left icon?
  leftIcon: PropTypes.node,
  // Does the item need to redirect?
  navlink: PropTypes.bool,
  // Set an optional click handler?
  onClick: PropTypes.func,
  // Does the item need a right icon?
  rightIcon: PropTypes.node,
  // Does the item need to redirect to a page?
  to: PropTypes.string,
};

DropdownItem.defaultProps = {
  children: null,
  leftIcon: null,
  navlink: false,
  onClick: null,
  rightIcon: null,
  to: "/",
};
