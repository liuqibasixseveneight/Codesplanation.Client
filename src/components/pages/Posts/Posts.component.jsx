import React from "react";
import { Link } from "react-router-dom";

import { ContentWrapper } from "../../templates";
import { PostList } from "../../ui";
import { useGetPosts, useGetUsers } from "../../../hooks";
import { Wrapper } from "./Posts.styles";

export default function Posts() {
  const {
    loading: getPostsLoading,
    data: getPostsData,
    error: getPostsError,
  } = useGetPosts();
  const {
    loading: getUsersLoading,
    data: getUsersData,
    error: getUsersError,
  } = useGetUsers();

  if (getPostsError) {
    return <span>Error!: {getPostsError}</span>;
  }
  if (getUsersError) {
    return <span>Error!: {getUsersError}</span>;
  }

  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <h1>Posts</h1>

          <div
            style={{
              background: "pink",
              display: "flex",
              flexDirection: "column",
              maxWidth: "70%",
            }}
          >
            {/* {getPostsLoading ? (
              <span>Loading...</span>
            ) : (
              getPostsData &&
              getPostsData.getPosts.map((post) => (
                <div key={post.id} style={{ padding: "0.8rem 0" }}>
                  <p>{post.body}</p>
                  <strong>{post.username}</strong>
                  <i>{post.createdAt}</i>
                </div>
              ))
            )} */}

            <PostList />

            {getUsersLoading ? (
              <span>Loading...</span>
            ) : (
              getUsersData &&
              getUsersData.getUsers.map((user) => (
                <div key={user.id} style={{ padding: "0.8rem 0" }}>
                  <p>{user.email}</p>
                  <Link to={`/user&id=${user.id}`}>
                    <span>{user.username}</span>
                  </Link>
                  <i>{user.createdAt}</i>
                </div>
              ))
            )}
          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}
