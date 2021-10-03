import React from "react";
import PropTypes from "prop-types";

import { Text } from "../../ui";
import { Wrapper } from "./PageHeading.styles";

export default function PageHeading({ subtext, heading }) {
  return (
    <Wrapper>
      <Text as="h1" heading fontSize="2.4rem" margin="0">
        {heading}
      </Text>
      <Text as="span" bold>
        {subtext}
      </Text>
    </Wrapper>
  );
}

PageHeading.propTypes = {
  // What is the heading?
  heading: PropTypes.string.isRequired,
  // What is the subtext?
  subtext: PropTypes.string.isRequired,
};

PageHeading.defaultProps = {
  heading: null,
  subtext: null,
};
