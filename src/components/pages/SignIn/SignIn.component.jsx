import React, { useContext, useState } from "react"; // TODO: Rework into redux toolkit
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";

import { AuthContext } from "../../../context/auth"; // TODO: Rework into redux toolkit
import { useForm } from "../../../hooks";
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
        <h1>Sign In</h1>

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
                type="password"
                placeholder="Password"
                name="password"
                value={values.password}
                onChange={onChange}
                style={errors.password ? { borderColor: "tomato" } : {}}
              />

              <button type="submit" onSubmit={onSubmit}>
                Sign In
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
