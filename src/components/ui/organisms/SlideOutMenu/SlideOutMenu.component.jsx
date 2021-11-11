import React from "react";
import { useSelector } from "react-redux";

import { SlideOutMenuBody, SlideOutMenuHeader } from "../../index";
import { WidthWrapper, Wrapper } from "./SlideOutMenu.styles";

export default function SlideOutMenu() {
  const isSlideOutMenuOpen = useSelector((state) => {
    if (state.navigation) {
      return state.navigation.isSlideOutMenuOpen;
    }
  });

  return (
    <>
      <Wrapper isSlideOutMenuOpen={isSlideOutMenuOpen}>
        <WidthWrapper>
          <SlideOutMenuHeader />
          <SlideOutMenuBody />
        </WidthWrapper>
      </Wrapper>
    </>
  );
}
