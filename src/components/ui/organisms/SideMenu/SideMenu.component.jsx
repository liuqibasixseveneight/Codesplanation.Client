import React from "react";
import { useSelector } from "react-redux";

import { SideMenuBody, SideMenuHeader } from "../../index";
import { WidthWrapper, Wrapper } from "./SideMenu.styles";

export default function SideMenu() {
  const isNavigationOpen = useSelector((state) => {
    if (state.navigation) {
      return state.navigation.isNavigationOpen;
    }
  });

  return (
    <>
      <Wrapper isNavigationOpen={isNavigationOpen}>
        <WidthWrapper>
          <SideMenuHeader />
          <SideMenuBody />
        </WidthWrapper>
      </Wrapper>
    </>
  );
}
