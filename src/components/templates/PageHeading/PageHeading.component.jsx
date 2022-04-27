import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../ui';
import {
  ButtonWrapper,
  HeadingExtrasWrapper,
  HeadingWrapper,
  Wrapper,
} from './PageHeading.styles';

export default function PageHeading({ heading, navButton, subheading }) {
  return (
    <Wrapper>
      <HeadingWrapper>
        <HeadingExtrasWrapper>
          {navButton && <ButtonWrapper>{navButton}</ButtonWrapper>}
        </HeadingExtrasWrapper>

        <Text as='h1' heading fontSize='2.4rem' margin='0'>
          {heading}
        </Text>
        <Text as='span' bold>
          {subheading}
        </Text>
      </HeadingWrapper>
    </Wrapper>
  );
}

PageHeading.propTypes = {
  heading: PropTypes.string.isRequired,
  navButton: PropTypes.node,
  subheading: PropTypes.string.isRequired,
};

PageHeading.defaultProps = {
  heading: null,
  navButton: null,
  subheading: null,
};
