import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';

import { Wrapper } from './PostAuthorBar.styles';

export default function PostAuthorBar({ post }) {
  const createdAt = get(post, 'createdAt');
  const username = get(post, 'username');
  const likeCount = get(post, 'likeCount');
  const commentCount = get(post, 'commentCount');

  return (
    <Wrapper>
      <h1>PostAuthorBar</h1>
      <div>
        <em>{createdAt},&nbsp;</em>
        <em>{username},&nbsp;</em>
        <em>{likeCount},&nbsp;</em>
        <em>{commentCount}</em>
      </div>
    </Wrapper>
  );
}

PostAuthorBar.propTypes = {
  post: PropTypes.object,
};

PostAuthorBar.defaultProps = {
  post: {},
};
