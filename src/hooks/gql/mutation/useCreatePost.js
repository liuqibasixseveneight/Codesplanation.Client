import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

const CREATE_POST_MUTATION = gql`
  mutation createPost($title: String!, $subtitle: String!, $body: String!) {
    createPost(title: $title, subtitle: $subtitle, body: $body) {
      id
      body
      title
      subtitle
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

export const useCreatePost = (title, subtitle, body) => {
  const [createPost, { loading, data, error }] = useMutation(
    CREATE_POST_MUTATION,
    {
      variables: {
        title,
        subtitle,
        body,
      },
      update: (_, result) => {
        console.log("CREATE POST RESULT:__", result);
        title = "";
        subtitle = "";
        body = "";
      },
    }
  );

  return [createPost, { loading, data, error }];
};
