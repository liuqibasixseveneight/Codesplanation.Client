import React from 'react';
import PropTypes from 'prop-types';

import {
  CountLabel,
  CountText,
  CountWrapper,
  Wrapper,
} from './CountIndicator.styles';

export default function CountIndicator({ count, onClick, text }) {
  return (
    <Wrapper onClick={onClick}>
      <CountWrapper>
        <CountText>{count > 999 ? '999+' : count?.toString()}</CountText>
      </CountWrapper>

      <CountLabel>{text}</CountLabel>
    </Wrapper>
  );
}

CountIndicator.propTypes = {
  // What count is rendered?
  count: PropTypes.number.isRequired,
  // Set an optional click handler?
  onClick: PropTypes.func,
  // What describes the count?
  text: PropTypes.string,
};

CountIndicator.defaultProps = {
  count: null,
  onClick: null,
  text: null,
};
