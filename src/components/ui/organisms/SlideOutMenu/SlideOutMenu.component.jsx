import React from "react";
import { useSelector } from "react-redux";

import { SlideOutMenuBody, SlideOutMenuHeader } from "../../index";
import { WidthWrapper, Wrapper } from "./SlideOutMenu.styles";

export default function SlideOutMenu() {
  const isNavigationOpen = useSelector((state) => {
    if (state.navigation) {
      return state.navigation.isNavigationOpen;
    }
  });

  return (
    <>
      <Wrapper isNavigationOpen={isNavigationOpen}>
        <WidthWrapper>
          <SlideOutMenuHeader />
          <SlideOutMenuBody />
        </WidthWrapper>
      </Wrapper>
    </>
  );
}
