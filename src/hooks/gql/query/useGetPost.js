import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

const GET_POST_QUERY = gql`
  query($postId: ID!) {
    getPost(postId: $postId) {
      title
      subtitle
      difficulty
      body
      commentCount
      comments {
        body
        createdAt
        id
        username
      }
      createdAt
      id
      likeCount
      likes {
        createdAt
        id
        username
      }
      username
    }
  }
`;

export const useGetPost = (postId) => {
  const { loading, data, error } = useQuery(GET_POST_QUERY, {
    variables: {
      postId,
    },
  });

  return { loading, data, error };
};
