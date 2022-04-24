import React from 'react';
import PropTypes from 'prop-types';

import { Text } from '../../ui';
import { HeadingWrapper, Wrapper } from './PageHeading.styles';

export default function PageHeading({ children, subheading, heading }) {
  return (
    <Wrapper>
      <HeadingWrapper>
        <Text as='h1' heading fontSize='2.4rem' margin='0'>
          {heading}
        </Text>
        <Text as='span' bold>
          {subheading}
        </Text>
      </HeadingWrapper>
      {children}
    </Wrapper>
  );
}

PageHeading.propTypes = {
  // Are there additional items?
  children: PropTypes.node,
  // What is the heading?
  heading: PropTypes.string.isRequired,
  // What is the subheading?
  subheading: PropTypes.string.isRequired,
};

PageHeading.defaultProps = {
  children: null,
  heading: null,
  subheading: null,
};
