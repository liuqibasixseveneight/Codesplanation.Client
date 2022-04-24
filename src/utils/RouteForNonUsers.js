import React, { useContext } from 'react'; // TODO: Rework into redux toolkit
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../context/auth';

export default function RouteForNonUsers({
  component: Component,
  redirectTo,
  ...rest
}) {
  const { user } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        user ? (
          <Redirect to={redirectTo ? redirectTo : '/'} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
}

RouteForNonUsers.propTypes = {
  component: PropTypes.func.isRequired,
  redirectTo: PropTypes.string,
};

RouteForNonUsers.defaultProps = {
  component: null,
  redirectTo: '/',
};
