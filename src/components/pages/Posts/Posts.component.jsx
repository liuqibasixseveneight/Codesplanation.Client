import React from "react";
import { Link } from "react-router-dom";

import { ContentWrapper } from "../../templates";
import { PostList, Text } from "../../ui";
import { useGetUsers } from "../../../hooks";
import { Wrapper } from "./Posts.styles";

export default function Posts() {
  const {
    loading: getUsersLoading,
    data: getUsersData,
    error: getUsersError,
  } = useGetUsers();

  if (getUsersError) {
    return <span>Error!: {getUsersError}</span>;
  }

  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <Text heading as="h1">
            Posts
          </Text>
          <PostList />

          <div
            style={{
              background: "pink",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {getUsersLoading ? (
              <span>Loading...</span>
            ) : (
              getUsersData &&
              getUsersData.getUsers.map((user) => (
                <div key={user.id} style={{ padding: "0.8rem 0" }}>
                  <p>{user.email}</p>
                  <Link to={`/user&id=${user.id}`}>
                    <span>{user.username}</span>
                  </Link>
                  <i>{user.createdAt}</i>
                </div>
              ))
            )}
          </div>
        </ContentWrapper>
      </Wrapper>
    </>
  );
}
