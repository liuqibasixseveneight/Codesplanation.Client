import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { GET_POSTS_QUERY } from '../query/useGetPosts';

const CREATE_POST_MUTATION = gql`
  mutation createPost(
    $title: String!
    $subtitle: String!
    $difficulty: String!
    $body: String!
  ) {
    createPost(
      title: $title
      subtitle: $subtitle
      difficulty: $difficulty
      body: $body
    ) {
      id
      title
      subtitle
      difficulty
      body
      createdAt
      username
      likes {
        id
        username
        createdAt
      }
      likeCount
      comments {
        id
        body
        username
        createdAt
      }
      commentCount
    }
  }
`;

export const useCreatePost = (values) => {
  const [createPost, { loading, data, error }] = useMutation(
    CREATE_POST_MUTATION,
    {
      variables: values,
      update: (proxy, result) => {
        const data = proxy.readQuery({
          query: GET_POSTS_QUERY,
        });

        proxy.writeQuery({
          query: GET_POSTS_QUERY,
          data: {
            getPosts: [result.data.createPost, ...data.getPosts],
          },
        });

        values.title = '';
        values.subtitle = '';
        values.difficulty = '';
        values.body = '';
      },
    }
  );

  return [createPost, { loading, data, error }];
};
