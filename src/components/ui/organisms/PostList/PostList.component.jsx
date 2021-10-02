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
              commentCount,
              createdAt,
              likeCount,
              title,
              username,
              ...props
            }) => (
              <Post
                key={id}
                body={body}
                commentCount={commentCount}
                createdAt={createdAt}
                likeCount={likeCount}
                title={title}
                username={username}
                {...props}
              />
            )
          )
        )}
      </Wrapper>
    </>
  );
}
