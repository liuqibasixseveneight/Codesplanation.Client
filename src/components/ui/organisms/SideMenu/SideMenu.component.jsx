import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import { IoMdCloseCircleOutline as CloseIcon } from "react-icons/io";

import { setIsNavigationOpen } from "../../../../redux/slices/navigationSlice";
import { WidthWrapper, Wrapper } from "./SideMenu.styles";

export default function Navigation() {
  const isNavigationOpen = useSelector((state) => {
    if (state.navigation) {
      return state.navigation.isNavigationOpen;
    }
  });
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper isNavigationOpen={isNavigationOpen}>
        <WidthWrapper>
          <button onClick={() => dispatch(setIsNavigationOpen())}>
            Close SideMenu
          </button>
        </WidthWrapper>
      </Wrapper>
    </>
  );
}
