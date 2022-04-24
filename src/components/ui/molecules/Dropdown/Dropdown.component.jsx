import React, { createContext, useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

import { DropdownItem } from '../../index';
import { HorizontalBreak, Wrapper } from './Dropdown.styles';

const DropdownGroupContext = createContext();

function Item({ children, leftIcon, navlink, onClick, rightIcon, to }) {
  return (
    <DropdownItem
      onClick={onClick}
      leftIcon={leftIcon}
      navlink={navlink}
      rightIcon={rightIcon}
      to={to}
    >
      {children}
    </DropdownItem>
  );
}

function Break() {
  return <HorizontalBreak />;
}

export default function Dropdown({ children, left, user, ...props }) {
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  return (
    <DropdownGroupContext.Provider value={props}>
      <Wrapper height={menuHeight} left={left} ref={dropdownRef}>
        {children}
      </Wrapper>
    </DropdownGroupContext.Provider>
  );
}

Dropdown.propTypes = {
  // What represents the children?
  children: PropTypes.node.isRequired,
  // Does it need to render on the left?
  left: PropTypes.bool,
  // What represents the user?
  user: PropTypes.object.isRequired,
};

Dropdown.defaultProps = {
  children: null,
  left: false,
  user: {},
};

DropdownItem.propTypes = {
  // What represents the children?
  children: PropTypes.node.isRequired,
  // Does the item need a left icon?
  leftIcon: PropTypes.node,
  // Does the item need to redirect?
  navlink: PropTypes.bool,
  // Set an optional click handler?
  onClick: PropTypes.func,
  // Does the item need a right icon?
  rightIcon: PropTypes.node,
  // Does the item need to redirect to a page?
  to: PropTypes.string,
};

DropdownItem.defaultProps = {
  children: null,
  leftIcon: null,
  navlink: false,
  onClick: null,
  rightIcon: null,
  to: '/',
};

Dropdown.Item = Item;
Dropdown.Break = Break;
