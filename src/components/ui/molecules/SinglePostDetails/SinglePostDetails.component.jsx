import React from 'react';
import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';
import { get } from 'lodash';
import moment from 'moment';

import { ContentWrapper, PageHeading } from '../../../templates';
import { Button, PostAuthorBar } from '../../index';
import { Wrapper } from './SinglePostDetails.styles';

export default function SinglePostDetails({ loading, post }) {
  const badgeProps = {
    text: post?.difficulty,
  };

  console.log('post', post);

  const createdAt = get(post, 'createdAt');
  const username = get(post, 'username');
  const userId = get(post, 'user');
  const likeCount = get(post, 'likeCount');
  const commentCount = get(post, 'commentCount');

  return (
    <ContentWrapper>
      <Wrapper>
        {loading ? (
          <PageHeading
            heading='Post...'
            subheading="Please wait, we're fetching the Post data now..."
          />
        ) : (
          <>
            <PageHeading
              heading={post?.title}
              subheading={post?.subtitle}
              navButton={
                <Button
                  linkButton
                  to={'/posts'}
                  icon={<BsChevronLeft />}
                  text='Back to Posts'
                />
              }
              badge={badgeProps}
            />

            <PostAuthorBar>
              <PostAuthorBar.Item
                label='Posted:'
                data={moment(createdAt).format('MMMM Do YYYY')}
              />
              <PostAuthorBar.Item
                label='Author:'
                data={username}
                linksTo={`/user/${userId}`}
              />
              <PostAuthorBar.Item label='Like count:' data={likeCount} />
              <PostAuthorBar.Item label='Comment count:' data={commentCount} />
            </PostAuthorBar>

            <p>{post?.body}</p>
            <pre>{JSON.stringify(post, null, 2)}</pre>
          </>
        )}
      </Wrapper>
    </ContentWrapper>
  );
}

SinglePostDetails.propTypes = {
  loading: PropTypes.bool,
  post: PropTypes.object.isRequired,
};

SinglePostDetails.defaultProps = {
  loading: false,
  post: {},
};
