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
  children: PropTypes.node.isRequired,
  left: PropTypes.bool,
  user: PropTypes.object.isRequired,
};

Dropdown.defaultProps = {
  children: null,
  left: false,
  user: {},
};

Dropdown.Item = Item;
Dropdown.Break = Break;
