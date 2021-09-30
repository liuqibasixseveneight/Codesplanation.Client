import React, { useContext } from "react"; // TODO: Rework into redux toolkit
import { useDispatch } from "react-redux";

import { setIsNavigationOpen } from "../../../../redux/slices/navigationSlice";
import { AuthContext } from "../../../../context/auth"; // TODO: Rework into redux toolkit
import { Navigation } from "../../index";
import {
  Heading,
  NavigationWrapper,
  StyledLink,
  Wrapper,
} from "./SideMenuBody.styles";

export default function SideMenuBody() {
  const { user } = useContext(AuthContext); // TODO: Rework into redux toolkit
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Heading>
          Hi{" "}
          {user ? (
            <StyledLink
              to={`/user&id=${user.id}`}
              onClick={() => dispatch(setIsNavigationOpen())}
            >
              {user.username}
            </StyledLink>
          ) : (
            "there"
          )}
          ! Where are we going?
        </Heading>

        <NavigationWrapper>
          <Navigation isVertical margin="0 0.8rem">
            <Navigation.Item
              to="/"
              onClick={() => dispatch(setIsNavigationOpen())}
              isVertical
            >
              Home
            </Navigation.Item>
            <Navigation.Item
              to="/posts"
              onClick={() => dispatch(setIsNavigationOpen())}
              isVertical
            >
              Posts
            </Navigation.Item>
            <Navigation.Item
              to="/about"
              onClick={() => dispatch(setIsNavigationOpen())}
              isVertical
            >
              About
            </Navigation.Item>
            <Navigation.Item
              to="/contact"
              onClick={() => dispatch(setIsNavigationOpen())}
              isVertical
            >
              Contact
            </Navigation.Item>
          </Navigation>
        </NavigationWrapper>
      </Wrapper>
    </>
  );
}
