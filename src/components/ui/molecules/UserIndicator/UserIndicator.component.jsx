import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import { CgProfile as ViewProfileIcon } from "react-icons/cg";
import {
  IoLogOutOutline as SignOutIcon,
  IoChevronForward as ForwardChevronIcon,
} from "react-icons/io5";
import { MdInvertColors as ThemeIcon } from "react-icons/md";

import { AuthContext } from "../../../../context/auth";
import { Dropdown } from "../index";
import { UserAvatar, UserText, Wrapper } from "./UserIndicator.styles";

export default function UserIndicator({ user }) {
  const { logout } = useContext(AuthContext); // TODO: Rework into redux toolkit
  const isGlobalThemeDark = useSelector((state) => {
    if (state.globalTheme) {
      return state.globalTheme.isGlobalThemeDark;
    }
  });
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <>
      <Wrapper
        onClick={() => setIsDropdownOpen((isDropdownOpen) => !isDropdownOpen)}
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

            <Dropdown.Item
              leftIcon={<ThemeIcon />}
              rightIcon={<ForwardChevronIcon />}
            >
              Theme: {isGlobalThemeDark ? `Dark` : `Light`}
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
