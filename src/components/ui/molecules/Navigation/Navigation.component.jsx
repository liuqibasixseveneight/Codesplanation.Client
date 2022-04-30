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
  children: PropTypes.node.isRequired,
  margin: PropTypes.string,
  padding: PropTypes.string,
  isVertical: PropTypes.bool,
};

Navigation.defaultProps = {
  children: null,
  margin: null,
  padding: null,
  isVertical: false,
};

Navigation.Item = Item;
