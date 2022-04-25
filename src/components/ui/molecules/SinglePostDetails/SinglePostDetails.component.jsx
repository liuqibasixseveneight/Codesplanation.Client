import React from 'react';
import PropTypes from 'prop-types';
import { BsChevronLeft } from 'react-icons/bs';

import { ContentWrapper, PageHeading } from '../../../templates';
import { Button, PostAuthorBar } from '../../index';
import { Wrapper } from './SinglePostDetails.styles';

export default function SinglePostDetails({ loading, post }) {
  const badgeProps = {
    text: post?.difficulty,
  };

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

            <PostAuthorBar post={post} />

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
