import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../index';
import {
  StyledLink,
  StyledText,
  Wrapper,
} from './SideNavigationHeading.styles';

export default function SideNavigationHeading({ link, onClick, text, to }) {
  if (!link) {
    return (
      <Wrapper>
        <Text as='h4' bold fontSize='1.2rem'>
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
  link: PropTypes.bool,
  onClick: PropTypes.func,
  text: PropTypes.node.isRequired,
  to: PropTypes.string,
};

SideNavigationHeading.defaultProps = {
  link: false,
  onClick: null,
  text: null,
  to: '/',
};
