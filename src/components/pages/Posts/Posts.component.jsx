import React from 'react';

import { ContentWrapper, PageHeading } from '../../templates';
import { PostList, PostNavigation } from '../../ui';
import { Content, Wrapper } from './Posts.styles';

export default function Posts() {
  return (
    <Wrapper>
      <PostNavigation />

      <Content>
        <ContentWrapper>
          <PageHeading
            heading='Posts'
            subheading='Explore code explanations by language and difficulty'
          />

          <PostList />
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
}
