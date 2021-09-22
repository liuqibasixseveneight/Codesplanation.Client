import React, { createContext } from "react";

import { Wrapper } from "./Navigation.styles";
import { NavigationItem } from "../../index";

const NavigationGroupContext = createContext();

function Item({ border, children, onClick, to }) {
  return (
    <NavigationItem border={border} onClick={onClick} to={to}>
      {children}
    </NavigationItem>
  );
}

export default function Navigation({ children, margin, padding, ...props }) {
  return (
    <NavigationGroupContext.Provider value={props}>
      <Wrapper margin={margin} padding={padding}>
        {children}
      </Wrapper>
    </NavigationGroupContext.Provider>
  );
}

Navigation.Item = Item;
