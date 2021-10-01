import React from "react";

import { Wrapper } from "./Post.styles";

export default function Post({
  id,
  body,
  username,
  createdAt,
  likeCount,
  commentCount,
  ...props
}) {
  return (
    <>
      <Wrapper>
        <h4>POST TITLE</h4>

        <div>
          <p>{body}</p>
          <span>{username}</span>
          <span>{createdAt}</span>
          <span>Likes: {likeCount}</span>
          <span>Comments: {commentCount}</span>
        </div>
      </Wrapper>
    </>
  );
}
