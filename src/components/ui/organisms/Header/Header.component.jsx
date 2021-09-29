import React, { useContext } from "react"; // TODO: Rework into redux toolkit
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { AuthContext } from "../../../../context/auth"; // TODO: Rework into redux toolkit
import {
  LogoWrapper,
  NavigationSpacer,
  WidthWrapper,
  Wrapper,
} from "./Header.styles";
import {
  Logo,
  Navigation,
  NavigationMenu,
  ThemeToggle,
  UserIndicator,
} from "../../index";
import { useWindowSize } from "../../../../hooks";

export default function Header() {
  const { user } = useContext(AuthContext); // TODO: Rework into redux toolkit
  const size = useWindowSize();
  const isGlobalThemeDark = useSelector((state) => {
    if (state.globalTheme) {
      return state.globalTheme.isGlobalThemeDark;
    }
  });

  const menuBar = user ? (
    <Navigation margin="0 0.8rem">
      <UserIndicator user={user} />
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

            {!user && (
              <ThemeToggle id="header-theme-toggle" isOn={isGlobalThemeDark} />
            )}
          </LogoWrapper>

          {size.width <= 1024 ? (
            <NavigationMenu />
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
