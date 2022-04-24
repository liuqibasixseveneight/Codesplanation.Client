import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

const LIKE_POST_MUTATION = gql`
  mutation likePost($postId: ID!) {
    likePost(postId: $postId) {
      id
      likes {
        id
        username
      }
      likeCount
    }
  }
`;

export const useLikePost = (postId) => {
  const [likePost, { loading, data, error }] = useMutation(LIKE_POST_MUTATION, {
    variables: {
      postId,
    },
  });

  return [likePost, { loading, data, error }];
};
