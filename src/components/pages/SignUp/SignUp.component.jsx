import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { useForm } from "../../../hooks";
import { Wrapper } from "./SignUp.styles";

export default function SignUp({ history }) {
  const [errors, setErrors] = useState({});

  const { onChange, onSubmit, values } = useForm(registerUser, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      history.push("/");
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });

  function registerUser() {
    addUser();
  }

  return (
    <>
      <Wrapper>
        <h1>Sign Up</h1>

        <div style={{ display: "flex", flexDirection: "column" }}>
          {loading ? (
            <span>Loading..</span>
          ) : (
            <form
              onSubmit={onSubmit}
              noValidate
              style={{
                display: "flex",
                flexDirection: "column",
                maxWidth: "70%",
              }}
            >
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={values.username}
                onChange={onChange}
                style={errors.username ? { borderColor: "tomato" } : {}}
              />

              <input
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={onChange}
                style={errors.email ? { borderColor: "tomato" } : {}}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={onChange}
                style={errors.password ? { borderColor: "tomato" } : {}}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={onChange}
                style={errors.confirmPassword ? { borderColor: "tomato" } : {}}
              />

              <button type="submit" onSubmit={onSubmit}>
                Sign Up
              </button>
            </form>
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
        </div>
      </Wrapper>
    </>
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
