import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

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

export const useGetUsers = () => {
  const { loading, data, error } = useQuery(GET_USERS_QUERY);

  return { loading, data, error };
};
