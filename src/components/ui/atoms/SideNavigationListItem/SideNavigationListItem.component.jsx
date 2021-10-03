import React from "react";
import PropTypes from "prop-types";

import { StyledListItem } from "./SideNavigationListItem.styles";

export default function SideNavigationListItem({ text }) {
  return <StyledListItem>{text}</StyledListItem>;
}

SideNavigationListItem.propTypes = {
  // What text should be rendered?
  text: PropTypes.node.isRequired,
};

SideNavigationListItem.defaultProps = {
  text: null,
};
