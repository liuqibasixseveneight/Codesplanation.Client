import React from "react";
import PropTypes from "prop-types";

import { Border, Wrapper } from "./NavigationItem.styles";

export default function NavigationItem({ border, children, onClick, to }) {
  return (
    <>
      <Wrapper onClick={onClick} to={to}>
        <Border border={border}>{children}</Border>
      </Wrapper>
    </>
  );
}

NavigationItem.propTypes = {
  // Is a border required?
  border: PropTypes.bool,
  // What element should be rendered?
  children: PropTypes.node.isRequired,
  // Should the path be exact?
  exact: PropTypes.bool,
  // What function should be triggered when clicked?
  onClick: PropTypes.func,
  // Where should the NavLink path to?
  to: PropTypes.string.isRequired,
};

NavigationItem.defaultProps = {
  border: false,
  children: <span>Navigation Item</span>,
  exact: false,
  onClick: null,
  to: "/",
};
