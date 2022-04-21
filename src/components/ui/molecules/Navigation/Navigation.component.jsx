import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './Navigation.styles';
import { NavigationItem } from '../../index';

const NavigationGroupContext = createContext();

function Item({ border, children, exact, isVertical, onClick, to }) {
  return (
    <NavigationItem
      border={border}
      exact={exact}
      isVertical={isVertical}
      onClick={onClick}
      to={to}
    >
      {children}
    </NavigationItem>
  );
}

export default function Navigation({
  children,
  margin,
  padding,
  isVertical,
  ...props
}) {
  return (
    <NavigationGroupContext.Provider value={props}>
      <Wrapper margin={margin} padding={padding} isVertical={isVertical}>
        {children}
      </Wrapper>
    </NavigationGroupContext.Provider>
  );
}

Navigation.propTypes = {
  // What represents the children?
  children: PropTypes.node.isRequired,
  // Is a styling margin needed?
  margin: PropTypes.string,
  // Is a styling padding needed?
  padding: PropTypes.string,
  // Are the children rendered vertically?
  isVertical: PropTypes.bool,
};

Navigation.defaultProps = {
  children: null,
  margin: null,
  padding: null,
  isVertical: false,
};

Item.propTypes = {
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

Item.defaultProps = {
  border: false,
  children: <span>Navigation Item</span>,
  exact: false,
  isVertical: false,
  onClick: null,
  to: '/',
};

Navigation.Item = Item;
