import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { PostBody, PostTitle } from "../../index";
import { Wrapper } from "./Post.styles";

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
    <Link to={`/posts/${id}`}>
      <Wrapper>
        <PostTitle title={title} />
        <PostBody body={body} />
      </Wrapper>
    </Link>
  );
}

Post.propTypes = {
  // What is the main body of text?
  body: PropTypes.string,
  // How many comments does the Post have?
  commentCount: PropTypes.number,
  // When was the Post created?
  createdAt: PropTypes.string,
  // How many likes does the Post have?
  likeCount: PropTypes.number,
  // What other props are accepted?
  props: PropTypes.any,
  // What is the Post title?
  title: PropTypes.string,
  // Which user created the Post?
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
