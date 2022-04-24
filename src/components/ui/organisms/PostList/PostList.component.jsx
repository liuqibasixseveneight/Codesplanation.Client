import React from 'react';

import { useGetPosts } from '../../../../hooks';
import { Wrapper } from './PostList.styles';
import { Post } from '../../index';

export default function PostList() {
  const { loading, data: { getPosts: posts } = {}, error } = useGetPosts();

  if (error) {
    return <span>Error!:&nbsp;{error}</span>;
  }

  if (!posts && !loading) {
    return <span>There are no Posts to show</span>;
  }

  if (loading) {
    return <span>Loading...</span>;
  }

  return (
    <Wrapper>
      {posts &&
        posts.length > 0 &&
        (posts || []).map(
          ({
            id,
            commentCount,
            createdAt,
            likeCount,
            title,
            username,
            ...props
          }) => (
            <Post
              key={id}
              commentCount={commentCount}
              createdAt={createdAt}
              id={id}
              likeCount={likeCount}
              title={title}
              username={username}
              {...props}
            />
          )
        )}
    </Wrapper>
  );
}
