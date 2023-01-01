import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { CountIndicator, PostSubtitle, PostTitle } from '../../index';
import { DetailsWrapper, Username, Wrapper } from './Post.styles';

export default function Post({
  id,
  body,
  commentCount,
  createdAt,
  difficulty,
  likeCount,
  subtitle,
  title,
  username,
  ...props
}) {
  return (
    <Link to={`/posts/id=${id}`}>
      <Wrapper>
        <CountIndicator count={likeCount} text='Likes' />
        <CountIndicator count={commentCount} text='Comments' />

        <DetailsWrapper>
          <PostTitle title={title} />
          <PostSubtitle subtitle={subtitle} />
          <Username>Posted by:&nbsp;u/{username}</Username>
        </DetailsWrapper>
      </Wrapper>
    </Link>
  );
}

Post.propTypes = {
  body: PropTypes.string,
  commentCount: PropTypes.number,
  createdAt: PropTypes.string,
  difficulty: PropTypes.string,
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
  difficulty: null,
  likeCount: null,
  props: null,
  subtitle: null,
  title: null,
  username: null,
};
