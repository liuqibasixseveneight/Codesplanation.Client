import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import { Link } from "react-router-dom";

import { Wrapper } from "./Posts.styles";

export default function Posts() {
  const { loading, data, error } = useQuery(GET_POSTS_QUERY);
  const {
    loading: getUsersLoading,
    data: getUsersData,
    error: getUsersError,
  } = useQuery(GET_USERS_QUERY);

  if (error) {
    return <span>Error!: {error}</span>;
  }

  if (getUsersError) {
    return <span>Error!: {getUsersError}</span>;
  }

  return (
    <>
      <Wrapper>
        <h1>Posts</h1>

        <div
          style={{
            background: "pink",
            display: "flex",
            flexDirection: "column",
            maxWidth: "70%",
          }}
        >
          {loading ? (
            <span>Loading...</span>
          ) : (
            data &&
            data.getPosts.map((post) => (
              <div key={post.id} style={{ padding: "0.8rem 0" }}>
                <p>{post.body}</p>
                <strong>{post.username}</strong>
                <i>{post.createdAt}</i>
              </div>
            ))
          )}

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
      </Wrapper>
    </>
  );
}

const GET_POSTS_QUERY = gql`
  query {
    getPosts {
      id
      body
      createdAt
      username
      likeCount
      likes {
        username
        id
        createdAt
      }
      commentCount
      comments {
        username
        id
        createdAt
        body
      }
    }
  }
`;

const GET_USERS_QUERY = gql`
  query {
    getUsers {
      createdAt
      email
      id
      username
    }
  }
`;
