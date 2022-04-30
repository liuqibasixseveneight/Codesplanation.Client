import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';

const GET_USER_QUERY = gql`
  query getUser($userId: ID!) {
    getUser(userId: $userId) {
      id
      username
      email
      createdAt
    }
  }
`;

export const useGetUser = (userId) => {
  const { loading, data, error } = useQuery(GET_USER_QUERY, {
    variables: {
      userId,
    },
  });

  return { loading, data, error };
};
