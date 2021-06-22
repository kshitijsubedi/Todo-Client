import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

import * as routes from '/src/constants/routes';
import * as tokenService from '/src/services/token';
import { getAccessToken } from '../../../services/token';

export default function PrivateRoute({ children, ...rest }) {
  const isLogin = getAccessToken();

  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLogin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: routes.LOGIN,
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
