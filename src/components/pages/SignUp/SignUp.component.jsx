import React, { useContext, useState } from 'react'; // TODO: Rework into redux toolkit
import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';

import { AuthContext } from '../../../context/auth'; // TODO: Rework into redux toolkit
import { useForm } from '../../../hooks';
import { ContentWrapper } from '../../templates';
import { ErrorList, Form, Text } from '../../ui';
import { Wrapper } from './SignUp.styles';

export default function SignUp({ history }) {
  const context = useContext(AuthContext); // TODO: Rework into redux toolkit
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, { data: { register: userData } }) {
      context.login(userData); // TODO: Rework into redux toolkit
      history.push('/');
    },
    onError(err) {
      setErrors(err?.graphQLErrors[0]?.extensions?.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <Wrapper>
      <ContentWrapper>
        <Text as='h1' heading>
          Create your Codesplanation account
        </Text>

        <Text as='p'>Sign Up and continue to Codesplanation</Text>

        {loading ? (
          <span>Loading..</span>
        ) : (
          <Form onSubmit={onSubmit} noValidate>
            <Form.Input
              type='text'
              placeholder='Username'
              label='Username'
              name='username'
              value={values?.username}
              onChange={onChange}
              error={errors?.username}
            />

            <Form.Input
              type='text'
              placeholder='Email'
              label='Email'
              name='email'
              value={values?.email}
              onChange={onChange}
              error={errors?.email}
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

            <Form.Input
              type='password'
              placeholder='Confirm Password'
              label='Confirm Password'
              name='confirmPassword'
              value={values?.confirmPassword}
              onChange={onChange}
              error={errors?.confirmPassword}
            />

            <Form.Input type='submit' onSubmit={onSubmit} value='Sign Up' />
          </Form>
        )}

        {loading ? null : errors && <ErrorList errors={errors} />}
      </ContentWrapper>
    </Wrapper>
  );
}

const REGISTER_USER = gql`
  mutation register(
    $username: String!
    $email: String!
    $password: String!
    $confirmPassword: String!
  ) {
    register(
      registerInput: {
        username: $username
        email: $email
        password: $password
        confirmPassword: $confirmPassword
      }
    ) {
      id
      email
      username
      createdAt
      token
    }
  }
`;
