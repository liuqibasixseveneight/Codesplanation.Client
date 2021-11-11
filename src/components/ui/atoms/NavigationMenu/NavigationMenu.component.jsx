import React from "react";
import { useDispatch } from "react-redux";
import { BiMenuAltRight as MenuIcon } from "react-icons/bi";

import { setIsSlideOutMenuOpen } from "../../../../redux/slices/navigationSlice";
import { Wrapper } from "./NavigationMenu.styles";

export default function NavigationMenu() {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper onClick={() => dispatch(setIsSlideOutMenuOpen())}>
        <MenuIcon />
      </Wrapper>
    </>
  );
}
