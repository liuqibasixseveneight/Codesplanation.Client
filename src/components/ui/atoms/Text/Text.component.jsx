import React from "react";
import PropTypes from "prop-types";

import { StyledText } from "./Text.styles";

export default function Text({
  bold,
  children,
  color,
  fontSize,
  heading,
  margin,
  padding,
  subheading,
  text,
}) {
  return (
    <>
      <StyledText
        bold={bold}
        children={children}
        color={color}
        fontSize={fontSize}
        heading={heading}
        margin={margin}
        padding={padding}
        subheading={subheading}
        text={text}
      >
        <span>{children}</span>
      </StyledText>
    </>
  );
}

Text.propTypes = {
  // Is a border required?
  bold: PropTypes.bool,
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  heading: PropTypes.bool,
  margin: PropTypes.string,
  padding: PropTypes.string,
  subheading: PropTypes.bool,
  text: PropTypes.bool,
};

Text.defaultProps = {
  bold: null,
  children: null,
  color: null,
  fontSize: null,
  heading: null,
  margin: null,
  padding: null,
  subheading: null,
  text: null,
};
