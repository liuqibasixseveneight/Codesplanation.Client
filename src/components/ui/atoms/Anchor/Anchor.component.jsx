import React from "react";
import PropTypes from "prop-types";

import { StyledAnchor } from "./Anchor.styles";

export default function Anchor({ children, download, href, size, target }) {
  return (
    <>
      <StyledAnchor download={download} href={href} size={size} target={target}>
        {children}
      </StyledAnchor>
    </>
  );
}

Anchor.propTypes = {
  // What should be clickable?
  children: PropTypes.oneOfType([
    PropTypes.element.isRequired,
    PropTypes.number.isRequired,
    PropTypes.string.isRequired,
  ]),
  // What should be downloaded?
  download: PropTypes.string,
  // Where should the link direct to?
  href: PropTypes.string.isRequired,
  // How big should the link be?
  size: PropTypes.oneOf(["small", "medium", "large"]),
  // How should the link be opened?
  target: PropTypes.oneOf(["_blank", "_parent", "_self", "_top"]),
};

Anchor.defaultProps = {
  children: null,
  download: null,
  href: null,
  size: "medium",
  target: "_self",
};
