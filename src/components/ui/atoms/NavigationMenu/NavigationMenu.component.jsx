import React from "react";
import { useDispatch } from "react-redux";
import { BiMenuAltRight as MenuIcon } from "react-icons/bi";

import { setIsNavigationOpen } from "../../../../redux/slices/navigationSlice";
import { Wrapper } from "./NavigationMenu.styles";

export default function NavigationMenu() {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper onClick={() => dispatch(setIsNavigationOpen())}>
        <MenuIcon />
      </Wrapper>
    </>
  );
}
