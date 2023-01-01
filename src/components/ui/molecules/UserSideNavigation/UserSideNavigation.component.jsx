import React from 'react';
import PropTypes from 'prop-types';
import { BiMessageDetail as PostsIcon } from 'react-icons/bi';
import { BsBookmarks as FavouritesIcon } from 'react-icons/bs';
import { AiOutlineHeart as LikesIcon } from 'react-icons/ai';

import { SideNavigation } from '../../index';
// import { useGetPostsByUser } from '../../../../hooks';

export default function UserSideNavigation({ username, userId }) {
  // TODO: Fetch posts by userId
  // const { data = {} } = useGetPostsByUser(userId);

  return (
    <>
      <SideNavigation.Section>
        <SideNavigation.Heading
          link
          text={username}
          to={`/user/id=${userId}`}
        />
        <SideNavigation.List>
          <SideNavigation.ListItem
            text='Your Posts'
            leftIcon={<PostsIcon />}
            isLink
          />
          <SideNavigation.ListItem
            text='Your Favourites'
            leftIcon={<FavouritesIcon />}
          />
          <SideNavigation.ListItem text='Your Likes' leftIcon={<LikesIcon />} />
        </SideNavigation.List>
      </SideNavigation.Section>
      <SideNavigation.Break />
    </>
  );
}

UserSideNavigation.propTypes = {
  userId: PropTypes.string,
  username: PropTypes.string,
};

UserSideNavigation.defaultProps = {
  userId: '',
  username: '',
};
