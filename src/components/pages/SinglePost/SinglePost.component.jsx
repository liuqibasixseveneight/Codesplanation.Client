import React from 'react';
import PropTypes from 'prop-types';

import { ContentWrapper, PageHeading } from '../../templates';
import { PostNavigation } from '../../ui';
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
        <ContentWrapper>
          {loading ? (
            <PageHeading
              heading='Post...'
              subheading="Please wait, we're fetching the Post data now..."
            />
          ) : (
            <>
              <PageHeading heading={post?.title} subheading={post?.subtitle} />
              <span>Difficulty:&nbsp;{post?.difficulty}</span>
              <span>Body: {post?.body}</span>
              <span>Comment Count: {post?.commentCount?.toString()}</span>

              <h2>Comments:</h2>
              {post?.comments &&
                (post.comments || []).map((comment) => (
                  <div key={comment?.id}>
                    <p>Body: {comment?.body}</p>
                    <p>CreatedAt: {comment?.createdAt}</p>
                    <p>ID: {comment?.id}</p>
                    <p>Username: {comment?.username}</p>
                  </div>
                ))}

              <span>Created At:&nbsp;{post?.createdAt}</span>
              <span>ID: {post?.id}</span>
              <span>Like Count: {post?.likeCount?.toString()}</span>

              <h2>Likes: </h2>
              {post?.likes &&
                (post.likes || []).map((like) => (
                  <div key={like?.id}>
                    <p>{like?.createdAt}</p>
                    <p>{like?.id}</p>
                    <p>{like?.username}</p>
                  </div>
                ))}

              <span>Username:&nbsp;{post?.username}</span>
            </>
          )}
        </ContentWrapper>
      </Content>
    </Wrapper>
  );
}

SinglePost.propTypes = {
  // What should be taken from the params?
  match: PropTypes.object.isRequired,
};

SinglePost.defaultProps = {
  match: null,
};
