import React, { useContext, useState } from 'react'; // TODO: Rework into redux toolkit
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { AuthContext } from '../../../context/auth'; // TODO: Rework into redux toolkit
import { useForm } from '../../../hooks';
import { ContentWrapper } from '../../templates';
import { ErrorList, Form, Text } from '../../ui';
import { Wrapper } from './SignIn.styles';

export default function SignIn({ history }) {
  const context = useContext(AuthContext); // TODO: Rework into redux toolkit
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallBack, {
    username: '',
    password: '',
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData); // TODO: Rework into redux toolkit
      history.push('/');
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.errors);
    },
    variables: values,
  });

  function loginUserCallBack() {
    loginUser();
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <Text as='h1' heading>
          Sign In
        </Text>

        <Text as='p'>Continue to Codesplanation</Text>

        {loading ? (
          <span>Loading..</span>
        ) : (
          <Form onSubmit={onSubmit} noValidate>
            <Form.Input
              placeholder='Username'
              label='Username'
              name='username'
              value={values?.username}
              onChange={onChange}
              error={errors?.username}
            />

            <Form.Input
              type='password'
              placeholder='Password'
              label='Password'
              name='password'
              value={values?.password}
              onChange={onChange}
              error={errors?.password}
            />

            <Form.Input type='submit' onSubmit={onSubmit} value='Sign In' />
          </Form>
        )}

        {loading ? null : errors && <ErrorList errors={errors} />}
      </ContentWrapper>
    </Wrapper>
  );
}

const LOGIN_USER = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
