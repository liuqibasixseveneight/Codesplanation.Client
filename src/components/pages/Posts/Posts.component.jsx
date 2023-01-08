import React from 'react';
import { HiPlus } from 'react-icons/hi';

import { ContentWrapper, PageHeading } from '../../templates';
import { Button, PostList, PostNavigation } from '../../ui';
import { Content, Wrapper } from './Posts.styles';

import Test from './Test';

export default function Posts() {
  return (
    <Wrapper>
      <PostNavigation />

      <Content>
        <ContentWrapper>
          <PageHeading
            heading='Posts'
            subheading='Explore code explanations by language and difficulty'
            navButton={
              <Button
                linkButton
                to={'/posts/create-post'}
                icon={<HiPlus />}
                text='Create Post'
              />
            }
          />

          <PostList />

          <Test />
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
}
