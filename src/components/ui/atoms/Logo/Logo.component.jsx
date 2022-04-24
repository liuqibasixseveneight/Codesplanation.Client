import React from 'react';
import PropTypes from 'prop-types';

import { LogoText, Wrapper } from './Logo.styles';

export default function Logo({ margin }) {
  return (
    <Wrapper margin={margin}>
      <LogoText>Codesplanation</LogoText>
    </Wrapper>
  );
}

Logo.propTypes = {
  // Is a margin required?
  margin: PropTypes.string,
};

Logo.defaultProps = {
  margin: null,
};
