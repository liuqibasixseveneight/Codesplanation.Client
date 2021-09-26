import React from "react";
import PropTypes from "prop-types";

import {
  LeftIcon,
  ListItem,
  RightIcon,
  Text,
  Wrapper,
} from "./DropdownItem.styles";

export default function DropdownItem({
  children,
  goToMenu,
  leftIcon,
  onClick,
  rightIcon,
  to,
}) {
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
  children: PropTypes.string.isRequired,
  // Does the item need to redirect to a menu?
  goToMenu: PropTypes.string,
  // Does the item need a left icon?
  leftIcon: PropTypes.node,
  // Set an optional click handler?
  onClick: PropTypes.func,
  // Does the item need a right icon?
  rightIcon: PropTypes.node,
  // Does the item need to redirect to a page?
  to: PropTypes.string,
};

DropdownItem.defaultProps = {
  children: null,
  goToMenu: null,
  leftIcon: null,
  onClick: null,
  rightIcon: null,
  to: "/",
};
