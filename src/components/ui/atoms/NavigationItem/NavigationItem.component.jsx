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
  // Is a border required?
  border: PropTypes.bool,
  // What element should be rendered?
  children: PropTypes.node.isRequired,
  // Should the path be exact?
  exact: PropTypes.bool,
  // Are the children rendered vertically?
  isVertical: PropTypes.bool,
  // What function should be triggered when clicked?
  onClick: PropTypes.func,
  // Where should the NavLink path to?
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
