import React from 'react';
import PropTypes from 'prop-types';

import { Border, Wrapper } from './NavigationItem.styles';

export default function NavigationItem({
  border,
  children,
  exact,
  isVertical,
  onClick,
  to,
}) {
  return (
    <Wrapper onClick={onClick} exact={exact} to={to}>
      <Border border={border} isVertical={isVertical}>
        {children}
      </Border>
    </Wrapper>
  );
}

NavigationItem.propTypes = {
  border: PropTypes.bool,
  children: PropTypes.node.isRequired,
  exact: PropTypes.bool,
  isVertical: PropTypes.bool,
  onClick: PropTypes.func,
  to: PropTypes.string.isRequired,
};

NavigationItem.defaultProps = {
  border: false,
  children: <span>Navigation Item</span>,
  exact: false,
  isVertical: false,
  onClick: null,
  to: '/',
};
