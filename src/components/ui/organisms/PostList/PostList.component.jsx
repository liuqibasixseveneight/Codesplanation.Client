import React from 'react';

import { useGetPosts } from '../../../../hooks';
import { Wrapper } from './PostList.styles';
import { Post } from '../../index';

export default function PostList() {
  const { loading, data: { getPosts: posts } = {}, error } = useGetPosts();

  if (error) {
    return <span>Error!:&nbsp;{error}</span>;
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  if (!posts) {
    return <div>No posts available</div>;
  }

  return (
    <Wrapper>
      {posts &&
        (posts || []).map(
          ({
            id,
            commentCount,
            createdAt,
            difficulty,
            likeCount,
            subtitle,
            title,
            username,
            ...props
          }) => (
            <Post
              key={id}
              commentCount={commentCount}
              createdAt={createdAt}
              difficulty={difficulty}
              id={id}
              likeCount={likeCount}
              subtitle={subtitle}
              title={title}
              username={username}
              {...props}
            />
          )
        )}
    </Wrapper>
  );
}
