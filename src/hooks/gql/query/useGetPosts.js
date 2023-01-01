import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

export const GET_POSTS_QUERY = gql`
  query getPosts {
    getPosts {
      id
      title
      subtitle
      body
      createdAt
      difficulty
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
