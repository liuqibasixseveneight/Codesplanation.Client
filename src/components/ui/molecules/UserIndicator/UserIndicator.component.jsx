import React from "react";
import PropTypes from "prop-types";
import { FiLogOut as SignOutIcon } from "react-icons/fi";

import { UserAvatar, UserText, Wrapper } from "./UserIndicator.styles";

export default function UserIndicator({ onClick, to, user: { username } }) {
  return (
    <>
      <Wrapper onClick={onClick} to={to}>
        <UserAvatar />
        <UserText>{username}</UserText>
      </Wrapper>
    </>
  );
}

UserIndicator.propTypes = {
  // What function should be triggered when clicked?
  onClick: PropTypes.func,
  // Where should the NavLink path to?
  to: PropTypes.string.isRequired,
  // What should represent the user?
  user: PropTypes.object.isRequired,
};

UserIndicator.defaultProps = {
  onClick: null,
  to: "/",
  user: {},
};
