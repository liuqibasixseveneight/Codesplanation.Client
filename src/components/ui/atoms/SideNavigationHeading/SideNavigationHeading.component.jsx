import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../index";
import {
  StyledLink,
  StyledText,
  Wrapper,
} from "./SideNavigationHeading.styles";

export default function SideNavigationHeading({ link, onClick, text, to }) {
  if (!link) {
    return (
      <Wrapper>
        <Text as="h4" bold fontSize="1.2rem">
          {text}
        </Text>
      </Wrapper>
    );
  }

  return (
    <StyledLink onClick={onClick} to={to}>
      <StyledText bold>{text}</StyledText>
    </StyledLink>
  );
}

SideNavigationHeading.propTypes = {
  // Does the Heading need to navigate?
  link: PropTypes.bool,
  // Set an optional click handler?
  onClick: PropTypes.func,
  // What represents the children?
  text: PropTypes.node.isRequired,
  // Where does the Heading redirect to?
  to: PropTypes.string,
};

SideNavigationHeading.defaultProps = {
  link: false,
  onClick: null,
  text: null,
  to: "/",
};
