import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';

import history from '/src/utils/history';

import * as routes from '/src/constants/routes';

import Home from './home';
import Login from './auth/Login';
import Register from './auth/Register'
import NotFoundPage from './common/notfound';

import PrivateRoute from './common/routes/PrivateRoute';

// Top level application router.
const Router = () => (
  <HashRouter history={history}>
    <Switch>
      <Route path='/register'><Register/></Route>
      <Route path='/login'><Login/></Route>
      <PrivateRoute path='/'>
        <Home/>
      </PrivateRoute>
      <Route component={NotFoundPage} />
    </Switch>
  </HashRouter>
);

export default Router;
