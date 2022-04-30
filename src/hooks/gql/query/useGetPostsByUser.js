import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_POSTS_BY_USER_QUERY = gql`
  query getPostsByUser($userId: ID!) {
    getPostsByUser(userId: $userId) {
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
      user
    }
  }
`;

export const useGetPostsByUser = (userId) => {
  const { loading, data, error } = useQuery(GET_POSTS_BY_USER_QUERY, {
    variables: {
      userId,
    },
  });

  return { loading, data, error };
};
