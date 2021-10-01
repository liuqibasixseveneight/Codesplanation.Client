import React from "react";

import { useGetPosts } from "../../../../hooks";
import { Wrapper } from "./PostList.styles";
import { Post } from "../../index";

export default function PostList() {
  const { loading, data: { getPosts: posts } = {}, error } = useGetPosts();

  if (error) {
    return <span>Error!: {error}</span>;
  }

  return (
    <>
      <Wrapper>
        {loading ? (
          <span>Loading...</span>
        ) : (
          posts &&
          posts.map(
            ({
              id,
              body,
              username,
              createdAt,
              likeCount,
              commentCount,
              ...props
            }) => (
              <Post
                key={id}
                body={body}
                username={username}
                createdAt={createdAt}
                likeCount={likeCount}
                commentCount={commentCount}
                {...props}
              />
            )
          )
        )}
      </Wrapper>
    </>
  );
}
