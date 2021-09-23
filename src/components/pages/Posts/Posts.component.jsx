import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import { Wrapper } from "./Posts.styles";

export default function Posts() {
  const { loading, data, error } = useQuery(GET_POSTS_QUERY);

  if (error) {
    return <span>Error!: {error}</span>;
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
