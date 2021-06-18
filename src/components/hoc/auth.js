import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { setLoggingIn, setIsLoggedIn, setLoggedInUser } from '/src/actions/data/auth.js';

import history from '/src/utils/history';
import { handleError } from '/src/utils/errorHandler';

import * as routes from '/src/constants/routes';

import * as authService from '/src/services/auth';
import * as userService from '/src/services/user';
import * as tokenService from '/src/services/token';

/**
 * Auth state Higher Order Component.
 * Use this HOC if you need to use/modify User state.
 */
function withAuthState(WrappedComponent) {
  class Auth extends Component {

    fetch = async () => {
      const {setLoggedInUser } = this.props;
      console.log('Fetching user Info')
      let user = await userService.fetchSelf();
      setLoggedInUser(user.data[0]);
    }
    /**
     * Login user and save tokens and user data.
     *
     * @param {string} email
     * @param {string} password
     */
    login = async (email, password) => {
      try {
        const { setLoggingIn, setIsLoggedIn, setLoggedInUser } = this.props;
        setLoggingIn(true);

        const { data} = await authService.login({ email, password });
        tokenService.persist({ accessToken: data, refreshToken: data });

        let user = await userService.fetchSelf();

        setLoggingIn(false);
        setIsLoggedIn(true);
        setLoggedInUser(user.data[0]);

        history.push('/');
      } catch (err) {
        console.log('--',err)
        this.props.setLoggingIn(false);
        handleError(err, {
          title: 'Login Error',
        });
      }
    };

    logout = () => {
      authService.logout(tokenService.getRefreshToken());
      history.push('/login');
    };

    render() {
      return <WrappedComponent {...this.props} login={this.login} logout={this.logout} fetch = {this.fetch} />;
    }
  }

  const mapStateToProps = state => {
    let { isLoggedIn, isLoggingIn, user } = state.data.auth;

    return {
      isLoggedIn,
      isLoggingIn,
      loggedInUser: user,
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setLoggingIn, setIsLoggedIn, setLoggedInUser }, dispatch);
  };

  return connect(mapStateToProps, mapDispatchToProps)(Auth);
}

export { withAuthState };
