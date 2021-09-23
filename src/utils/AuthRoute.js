import React, { useContext } from "react"; // TODO: Rework into redux toolkit
import { Route, Redirect } from "react-router-dom";

import { AuthContext } from "../context/auth";

export default function AuthRoute({ component: Component, ...rest }) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
}
