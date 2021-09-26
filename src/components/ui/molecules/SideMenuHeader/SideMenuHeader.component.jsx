import React, { useContext } from "react"; // TODO: Rework into redux toolkit
import { useDispatch } from "react-redux";
import { MdClose as CloseIcon } from "react-icons/md";

import { AuthContext } from "../../../../context/auth"; // TODO: Rework into redux toolkit
import { setIsNavigationOpen } from "../../../../redux/slices/navigationSlice";
import { IconWrapper, Wrapper } from "./SideMenuHeader.styles";
import { Navigation } from "../../index";

export default function SideMenuHeader() {
  const { logout, user } = useContext(AuthContext); // TODO: Rework into redux toolkit
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Navigation margin="0 0.8rem">
          {!user ? (
            <>
              <Navigation.Item
                to="/sign-in"
                onClick={() => dispatch(setIsNavigationOpen())}
              >
                Sign In
              </Navigation.Item>
              <Navigation.Item
                to="/sign-up"
                onClick={() => dispatch(setIsNavigationOpen())}
                border
              >
                Sign Up
              </Navigation.Item>
            </>
          ) : (
            <Navigation.Item to="/" onClick={logout} border>
              Sign Out
            </Navigation.Item>
          )}
        </Navigation>

        <IconWrapper onClick={() => dispatch(setIsNavigationOpen())}>
          <CloseIcon />
        </IconWrapper>
      </Wrapper>
    </>
  );
}
