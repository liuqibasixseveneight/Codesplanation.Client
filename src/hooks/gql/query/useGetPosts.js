import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_POSTS_QUERY = gql`
  query {
    getPosts {
      id
      title
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

export const useGetPosts = () => {
  const { loading, data, error } = useQuery(GET_POSTS_QUERY);

  return { loading, data, error };
};
