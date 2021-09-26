import React, { useContext } from "react"; // TODO: Rework into redux toolkit
import { useSelector } from "react-redux";

import { AuthContext } from "../../../../context/auth"; // TODO: Rework into redux toolkit
import { SideMenuHeader } from "../../index";
import { WidthWrapper, Wrapper } from "./SideMenu.styles";

export default function SideMenu() {
  const { user } = useContext(AuthContext); // TODO: Rework into redux toolkit
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

          <h2>
            {user
              ? `Hi, ${user.username}! where are we going?`
              : "Hi there! Where are we going?"}
          </h2>
        </WidthWrapper>
      </Wrapper>
    </>
  );
}
