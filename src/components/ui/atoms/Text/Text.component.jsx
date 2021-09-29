import React from "react";
import PropTypes from "prop-types";

import { StyledText } from "./Text.styles";

export default function Text({
  as,
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
        as={as}
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
  // Is a semantic element needed?
  as: PropTypes.string,
  // Is a bold styling required?
  bold: PropTypes.bool,
  // What should be rendered?
  children: PropTypes.node.isRequired,
  // Is a color styling required?
  color: PropTypes.string,
  // Is a font size styling required?
  fontSize: PropTypes.string,
  // Is a heading styling required?
  heading: PropTypes.bool,
  // Is a margin styling required?
  margin: PropTypes.string,
  // Is a padding styling required?
  padding: PropTypes.string,
  // Is a subheading styling required?
  subheading: PropTypes.bool,
  // Is a text styling required?
  text: PropTypes.bool,
};

Text.defaultProps = {
  as: null,
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
