import React from 'react';
import PropTypes from 'prop-types';

import { ContentWrapper } from '../../templates';
import { PostNavigation, SinglePostDetails } from '../../ui';
import { useGetPost } from '../../../hooks';
import { Content, Wrapper } from './SinglePost.styles';

export default function SinglePost({ match }) {
  const {
    params: { postId },
  } = match;

  const { loading, data: { getPost: post } = {}, error } = useGetPost(postId);

  if (error) {
    return (
      <Wrapper>
        <PostNavigation />

        <Content>
          <ContentWrapper>
            <h1>Post</h1>
            <h2>Error!: {error}</h2>
          </ContentWrapper>
        </Content>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <PostNavigation />

      <Content>
        <SinglePostDetails loading={loading} post={post} />
      </Content>
    </Wrapper>
  );
}

SinglePost.propTypes = {
  match: PropTypes.object.isRequired,
};

SinglePost.defaultProps = {
  match: null,
};
