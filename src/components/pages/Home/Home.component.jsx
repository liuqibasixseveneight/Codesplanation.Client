import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import { Hero, HeroText } from "./Home.styles";

export default function Home() {
  const { loading, data, error } = useQuery(GET_POSTS_QUERY);

  if (error) {
    return <span>Error!: {error}</span>;
  }

  return (
    <>
      <Hero>
        <HeroText>
          <h2>Hello, world!</h2>
        </HeroText>

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
      </Hero>
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
