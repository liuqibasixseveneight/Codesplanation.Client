import React, { useContext } from "react"; // TODO: Rework into redux toolkit
import { useDispatch, useSelector } from "react-redux";
import { MdClose as CloseIcon } from "react-icons/md";

import { AuthContext } from "../../../../context/auth"; // TODO: Rework into redux toolkit
import { setIsNavigationOpen } from "../../../../redux/slices/navigationSlice";
import {
  IconWrapper,
  SideHeader,
  WidthWrapper,
  Wrapper,
} from "./SideMenu.styles";
import { Navigation, UserIndicator } from "../../index";

export default function SideMenu() {
  const { user } = useContext(AuthContext); // TODO: Rework into redux toolkit
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
            <Navigation margin="0 0.4rem">
              <UserIndicator left user={user} />
            </Navigation>

            <IconWrapper onClick={() => dispatch(setIsNavigationOpen())}>
              <CloseIcon />
            </IconWrapper>
          </SideHeader>
        </WidthWrapper>
      </Wrapper>
    </>
  );
}
