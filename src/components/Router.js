import React from 'react';
import { Router as HashRouter, Switch, Route } from 'react-router-dom';

import history from '/src/utils/history';

import * as routes from '/src/constants/routes';
import Todo from './todo';
import Home from './home/Home';
import Login from './auth/Login';
import Register from './auth/Register';
import NotFoundPage from './common/notfound';

import PrivateRoute from './common/routes/PrivateRoute';

// Top level application router.
const Router = () => (
  <HashRouter history={history} forceRefresh={true}>
    <Switch>
      <Route path="/register">
        <Register />
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <PrivateRoute path="/">
        <Todo />
      </PrivateRoute>
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Router;
