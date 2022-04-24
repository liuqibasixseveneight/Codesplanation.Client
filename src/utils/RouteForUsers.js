import React, { useContext } from 'react'; // TODO: Rework into redux toolkit
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { AuthContext } from '../context/auth';

export default function RouteForUsers({
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
          <Component {...props} />
        ) : (
          <Redirect to={redirectTo ? redirectTo : '/'} />
        )
      }
    />
  );
}

RouteForUsers.propTypes = {
  component: PropTypes.func.isRequired,
  redirectTo: PropTypes.string,
};

RouteForUsers.defaultProps = {
  component: null,
  redirectTo: '/',
};
