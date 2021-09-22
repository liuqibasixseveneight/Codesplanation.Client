import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { Wrapper } from "./SignUp.styles";

export default function SignUp() {
  const [errors, setErrors] = useState({});
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const [addUser, { loading }] = useMutation(REGISTER_USER, {
    update(_, result) {
      console.log("RESULT: ", result);
    },
    onError(err) {
      setErrors(err.graphQLErrors[0].extensions.errors);
    },
    variables: values,
  });

  const onSubmit = (event) => {
    event.preventDefault();
    addUser();
  };

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
              />

              <input
                type="text"
                placeholder="Email"
                name="email"
                value={values.email}
                onChange={onChange}
              />

              <input
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={onChange}
              />

              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={onChange}
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
