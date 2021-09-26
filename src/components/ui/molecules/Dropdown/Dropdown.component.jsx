import React, { createContext, useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";

import { HorizontalBreak, Wrapper } from "./Dropdown.styles";
import { DropdownItem } from "../../index";

const DropdownGroupContext = createContext();

function Item({ children, goToMenu, leftIcon, onClick, rightIcon, to }) {
  return (
    <>
      <DropdownItem
        onClick={onClick}
        goToMenu={goToMenu}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        to={to}
      >
        {children}
      </DropdownItem>
    </>
  );
}

function Break() {
  return (
    <>
      <HorizontalBreak />
    </>
  );
}

export default function Dropdown({ children, user, ...props }) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  return (
    <DropdownGroupContext.Provider value={props}>
      <Wrapper height={menuHeight}>{children}</Wrapper>
    </DropdownGroupContext.Provider>
  );
}

Dropdown.propTypes = {
  // What represents the user?
  user: PropTypes.object.isRequired,
};

Dropdown.defaultProps = {
  user: {},
};

Item.propTypes = {
  // What represents the children?
  children: PropTypes.string.isRequired,
  // Does the item need to redirect to a menu?
  goToMenu: PropTypes.string,
  // Does the item need a left icon?
  leftIcon: PropTypes.node,
  // Set an optional click handler?
  onClick: PropTypes.func,
  // Does the item need a right icon?
  rightIcon: PropTypes.node,
  // Does the item need to redirect to a page?
  to: PropTypes.string,
};

Item.defaultProps = {
  children: null,
  goToMenu: null,
  leftIcon: null,
  onClick: null,
  rightIcon: null,
  to: "/",
};

Dropdown.Item = Item;
Dropdown.Break = Break;
