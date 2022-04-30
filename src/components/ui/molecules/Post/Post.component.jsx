import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CountIndicator, PostTitle } from '../../index';
import { Wrapper } from './Post.styles';

export default function Post({
  id,
  body,
  commentCount,
  createdAt,
  likeCount,
  title,
  username,
  ...props
}) {
  return (
    <Link to={`/posts/id=${id}`}>
      <Wrapper>
        <CountIndicator count={likeCount} text='Likes' />
        <CountIndicator count={commentCount} text='Comments' />

        <PostTitle title={title} />
      </Wrapper>
    </Link>
  );
}

Post.propTypes = {
  body: PropTypes.string,
  commentCount: PropTypes.number,
  createdAt: PropTypes.string,
  likeCount: PropTypes.number,
  props: PropTypes.any,
  subtitle: PropTypes.string,
  title: PropTypes.string,
  username: PropTypes.string,
};

Post.defaultProps = {
  body: null,
  commentCount: null,
  createdAt: null,
  likeCount: null,
  title: null,
  username: null,
  props: null,
};
