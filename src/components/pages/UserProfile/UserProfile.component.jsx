import React from "react";

import { ContentWrapper } from "../../templates";
import { useGetUser } from "../../../hooks";
import { Wrapper } from "./UserProfile.styles";

export default function UserProfile({ match }) {
  const {
    params: { userId },
  } = match;

  const { loading, data: { getUser: user } = {}, error } = useGetUser(userId);

  if (error) {
    return (
      <>
        <Wrapper>
          <ContentWrapper>
            <h1>User Profile</h1>
            <h2>Error!: {error}</h2>
          </ContentWrapper>
        </Wrapper>
      </>
    );
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
