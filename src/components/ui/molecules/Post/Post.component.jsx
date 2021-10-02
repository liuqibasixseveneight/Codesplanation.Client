import React from "react";
import PropTypes from "prop-types";

import { PostBody, PostTitle } from "../../index";
import { Wrapper } from "./Post.styles";

export default function Post({
  body,
  commentCount,
  createdAt,
  likeCount,
  title,
  username,
  ...props
}) {
  return (
    <>
      <Wrapper>
        <PostTitle title={title} />
        <PostBody body={body} />
      </Wrapper>
    </>
  );
}
