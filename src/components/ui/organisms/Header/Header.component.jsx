import React, { useContext } from "react"; // TODO: Rework into redux toolkit
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { BiMenuAltRight as MenuIcon } from "react-icons/bi";

import { AuthContext } from "../../../../context/auth"; // TODO: Rework into redux toolkit
import {
  LogoWrapper,
  NavigationSpacer,
  WidthWrapper,
  Wrapper,
} from "./Header.styles";
import { Logo, Navigation, ThemeToggle, UserIndicator } from "../../index";
import { useWindowSize } from "../../../../hooks";
import { setIsNavigationOpen } from "../../../../redux/slices/navigationSlice";

export default function Header() {
  const { user, logout } = useContext(AuthContext); // TODO: Rework into redux toolkit
  const size = useWindowSize();
  const dispatch = useDispatch();

  const menuBar = user ? (
    <Navigation margin="0 0.8rem">
      <UserIndicator to={`user/${user.id}`} user={user} />

      <Navigation.Item to="/" onClick={logout}>
        Sign Out
      </Navigation.Item>
    </Navigation>
  ) : (
    <Navigation margin="0 0.8rem">
      <Navigation.Item to="/sign-in">Sign In</Navigation.Item>
      <Navigation.Item to="/sign-up" border>
        Sign Up
      </Navigation.Item>
    </Navigation>
  );

  return (
    <>
      <Wrapper>
        <WidthWrapper>
          <LogoWrapper>
            <NavLink to="/">
              <Logo margin="0 0 0 0.8rem" />
            </NavLink>

            <ThemeToggle />
          </LogoWrapper>

          {size.width <= 1024 ? (
            <div onClick={() => dispatch(setIsNavigationOpen())}>
              <MenuIcon
                style={{ height: "80px", width: "80px", fill: "red" }}
              />
            </div>
          ) : (
            <NavigationSpacer>
              <Navigation margin="0 0.8rem">
                <Navigation.Item to="/">Home</Navigation.Item>
                <Navigation.Item to="/posts">Posts</Navigation.Item>
                <Navigation.Item to="/about">About</Navigation.Item>
                <Navigation.Item to="/contact">Contact</Navigation.Item>
              </Navigation>

              {menuBar}
            </NavigationSpacer>
          )}
        </WidthWrapper>
      </Wrapper>
    </>
  );
}
