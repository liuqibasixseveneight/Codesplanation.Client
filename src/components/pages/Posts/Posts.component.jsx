import React from 'react';

import { ContentWrapper, PageHeading } from '../../templates';
import { NavigationItem, PostList, PostNavigation } from '../../ui';
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
          >
            <NavigationItem to='/posts/create-post'>
              Create Post +
            </NavigationItem>
          </PageHeading>

          <PostList />
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
}
