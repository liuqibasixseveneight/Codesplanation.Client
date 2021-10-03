import React from "react";

import { ContentWrapper, PageHeading } from "../../templates";
import { PostList, PostNavigation } from "../../ui";
import { Content, Wrapper } from "./Posts.styles";

export default function Posts() {
  return (
    <>
      <Wrapper>
        <PostNavigation />

        <Content>
          <ContentWrapper>
            <PageHeading
              heading="Posts"
              subtext="Explore code explanations by language and difficulty"
            />

            <PostList />
            <PostList />
            <PostList />
            <PostList />
            <PostList />
          </ContentWrapper>
        </Content>
      </Wrapper>
    </>
  );
}
