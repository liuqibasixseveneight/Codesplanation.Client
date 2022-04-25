import React from 'react';
import PropTypes from 'prop-types';

import { Badge, Text } from '../../ui';
import {
  HeadingExtrasWrapper,
  HeadingWrapper,
  Wrapper,
} from './PageHeading.styles';

export default function PageHeading({ badge, heading, navButton, subheading }) {
  return (
    <Wrapper>
      <HeadingWrapper>
        <HeadingExtrasWrapper>
          {navButton && <div style={{ margin: '0.8rem 0' }}>{navButton}</div>}
          {badge && <Badge icon={badge?.icon} text={badge?.text} />}
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
  badge: PropTypes.object,
  heading: PropTypes.string.isRequired,
  navButton: PropTypes.node,
  subheading: PropTypes.string.isRequired,
};

PageHeading.defaultProps = {
  badge: null,
  heading: null,
  navButton: null,
  subheading: null,
};
