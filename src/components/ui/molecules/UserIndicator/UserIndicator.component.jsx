import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { CgProfile as ViewProfileIcon } from "react-icons/cg";
import { IoLogOutOutline as SignOutIcon } from "react-icons/io5";
import { MdInvertColors as ThemeIcon } from "react-icons/md";

import { setIsDropdownOpen } from "../../../../redux/slices/dropdownSlice";
import { AuthContext } from "../../../../context/auth";
import { Dropdown, ThemeToggle } from "../../index";
import { UserAvatar, UserText, Wrapper } from "./UserIndicator.styles";

export default function UserIndicator({ user }) {
  const { logout } = useContext(AuthContext); // TODO: Rework into redux toolkit
  const isDropdownOpen = useSelector((state) => {
    if (state.dropdown) {
      return state.dropdown.isDropdownOpen;
    }
  });
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper
        onClick={() => dispatch(setIsDropdownOpen())}
        isDropdownOpen={isDropdownOpen}
      >
        <UserAvatar />
        <UserText>{user.username}</UserText>

        {isDropdownOpen && (
          <Dropdown user={user}>
            <Dropdown.Item
              to={`/user/${user.id}`}
              leftIcon={<ViewProfileIcon />}
            >
              View Profile
            </Dropdown.Item>
            <Dropdown.Item onClick={logout} leftIcon={<SignOutIcon />}>
              Sign Out
            </Dropdown.Item>

            <Dropdown.Break />

            <Dropdown.Item leftIcon={<ThemeIcon />}>
              Theme: <ThemeToggle />
            </Dropdown.Item>
          </Dropdown>
        )}
      </Wrapper>
    </>
  );
}

UserIndicator.propTypes = {
  // What represents the user?
  user: PropTypes.object.isRequired,
};

UserIndicator.defaultProps = {
  user: {},
};
