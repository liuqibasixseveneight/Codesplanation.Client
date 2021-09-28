import React, { useContext, useState } from "react"; // TODO: Rework into redux toolkit
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { AuthContext } from "../../../context/auth"; // TODO: Rework into redux toolkit
import { useForm } from "../../../hooks";
import { ContentWrapper } from "../../templates";
import { Form, Text } from "../../ui";
import { Wrapper } from "./SignIn.styles";

export default function SignIn({ history }) {
  const context = useContext(AuthContext); // TODO: Rework into redux toolkit
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(loginUserCallBack, {
    username: "",
    password: "",
  });

  const [loginUser, { loading }] = useMutation(LOGIN_USER, {
    update(_, { data: { login: userData } }) {
      context.login(userData); // TODO: Rework into redux toolkit
      history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });

  function loginUserCallBack() {
    loginUser();
  }

  return (
    <>
      <Wrapper>
        <ContentWrapper>
          <Text as="h1" heading>
            Sign In
          </Text>

          {loading ? (
            <span>Loading..</span>
          ) : (
            <Form onSubmit={onSubmit} noValidate>
              <Form.Input
                type="text"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={onChange}
                error={errors.username}
              />

              <Form.Input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={onChange}
                error={errors.password}
              />

              <Form.Input type="submit" onSubmit={onSubmit} value="Sign In" />
            </Form>
          )}

          {Object.keys(errors).length > 0 && (
            <div style={{ background: "red" }}>
              <ul>
                {Object.values(errors).map((value) => (
                  <li key={value}>{value}</li>
                ))}
              </ul>
            </div>
          )}
        </ContentWrapper>
      </Wrapper>
    </>
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
