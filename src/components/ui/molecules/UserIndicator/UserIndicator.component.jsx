import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { CgProfile as ViewProfileIcon } from 'react-icons/cg';
import { IoLogOutOutline as SignOutIcon } from 'react-icons/io5';
import { MdInvertColors as ThemeIcon } from 'react-icons/md';

import { setIsDropdownOpen } from '../../../../redux/slices/dropdownSlice';
import { AuthContext } from '../../../../context/auth';
import { Dropdown, ThemeToggle } from '../../index';
import { UserAvatar, UserText, Wrapper } from './UserIndicator.styles';

export default function UserIndicator({ left, user }) {
  const { logout } = useContext(AuthContext); // TODO: Rework into redux toolkit
  const isDropdownOpen = useSelector((state) => {
    if (state?.dropdown) {
      return state?.dropdown?.isDropdownOpen;
    }
  });
  const isGlobalThemeDark = useSelector((state) => {
    if (state?.globalTheme) {
      return state?.globalTheme?.isGlobalThemeDark;
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
        <UserText>{user?.username}</UserText>
      </Wrapper>

      {isDropdownOpen && (
        <Dropdown left={left} user={user}>
          <Dropdown.Item
            onClick={() => dispatch(setIsDropdownOpen())}
            to={`/user/id=${user?.id}`}
            navlink
            leftIcon={<ViewProfileIcon />}
          >
            View Profile
          </Dropdown.Item>
          <Dropdown.Item
            onClick={() => {
              logout();
              dispatch(setIsDropdownOpen());
            }}
            navlink
            leftIcon={<SignOutIcon />}
          >
            Sign Out
          </Dropdown.Item>

          <Dropdown.Break />

          <Dropdown.Item
            leftIcon={<ThemeIcon />}
            rightIcon={
              <ThemeToggle id='theme-toggle' isOn={isGlobalThemeDark} />
            }
          >
            Theme:
          </Dropdown.Item>
        </Dropdown>
      )}
    </>
  );
}

UserIndicator.propTypes = {
  left: PropTypes.bool,
  user: PropTypes.object.isRequired,
};

UserIndicator.defaultProps = {
  left: false,
  user: {},
};
