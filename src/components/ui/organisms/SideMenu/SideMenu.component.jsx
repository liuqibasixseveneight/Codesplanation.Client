import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdClose as CloseIcon } from "react-icons/md";

import { setIsNavigationOpen } from "../../../../redux/slices/navigationSlice";
import {
  IconWrapper,
  SideHeader,
  WidthWrapper,
  Wrapper,
} from "./SideMenu.styles";

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
          <SideHeader>
            <IconWrapper onClick={() => dispatch(setIsNavigationOpen())}>
              <CloseIcon />
            </IconWrapper>
          </SideHeader>
        </WidthWrapper>
      </Wrapper>
    </>
  );
}
