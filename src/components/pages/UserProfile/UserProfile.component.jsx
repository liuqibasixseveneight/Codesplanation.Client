import React from "react";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";

import { ContentWrapper } from "../../templates";
import { Wrapper } from "./UserProfile.styles";

export default function UserProfile({ match }) {
  const {
    params: { userId },
  } = match;

  const { loading, data: { getUser: user } = {}, error } = useQuery(
    GET_USER_QUERY,
    {
      variables: {
        userId,
      },
    }
  );

  if (error) {
    return <span>Error!: {error}</span>;
  }

  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <div>
            {loading ? (
              <div>
                <h1>User:</h1>
                <span>Loading...</span>
              </div>
            ) : (
              user && (
                <div>
                  <h1>User: {user.username}</h1>

                  <h2>Username: {user.username}</h2>
                  <h2>Email: {user.email}</h2>
                  <h2>Created At: {user.createdAt}</h2>
                  <h2>Id: {user.id}</h2>
                </div>
              )
            )}
          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}

const GET_USER_QUERY = gql`
  query($userId: ID!) {
    getUser(userId: $userId) {
      createdAt
      email
      id
      username
    }
  }
`;
