import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';

import { setLoggingIn, setIsLoggedIn, setLoggedInUser, setRegisteringIn } from '/src/actions/data/auth.js';
import * as toast from '/src/utils/toast';
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
      const { setLoggedInUser } = this.props;
      let user = await userService.fetchSelf();
      console.log('Fetching user Info', user);
      setLoggedInUser(user.data[0]);
    };
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
        const { data } = await authService.login({ email, password });
        tokenService.persist({ accessToken: data, refreshToken: data });

        let user = await userService.fetchSelf();

        setLoggingIn(false);
        setIsLoggedIn(true);
        setLoggedInUser(user.data[0]);
        history.push('/home');
      } catch (err) {
        this.props.setLoggingIn(false);
        handleError(err, {
          title: 'Login Error',
        });
      }
    };
    /**
     * Register new user.
     *  @param {string} name
     * @param {string} email
     * @param {string} password
     */
    register = async (name, email, password) => {
      try {
        const { setRegisteringIn } = this.props;
        setRegisteringIn(true);
        const { data } = await authService.register({ name, email, password });
        setRegisteringIn(false);
        toast.success({
          title: 'Success',
          message: 'You can login Now!',
        });
        history.push('/login');
      } catch (err) {
        this.props.setRegisteringIn(false);
        handleError(err, {
          title: 'Register Error',
        });
      }
    };

    logout = () => {
      authService.logout(tokenService.getRefreshToken());
      history.push('/login');
    };

    render() {
      return (
        <WrappedComponent
          {...this.props}
          login={this.login}
          logout={this.logout}
          fetch={this.fetch}
          register={this.register}
        />
      );
    }
  }

  const mapStateToProps = state => {
    let { isLoggedIn, isLoggingIn, isRegisteringIn, user } = state.data.auth;

    return {
      isLoggedIn,
      isLoggingIn,
      isRegisteringIn,
      loggedInUser: user,
    };
  };

  const mapDispatchToProps = dispatch => {
    return bindActionCreators({ setLoggingIn, setIsLoggedIn, setLoggedInUser, setRegisteringIn }, dispatch);
  };

  return connect(mapStateToProps, mapDispatchToProps)(Auth);
}

export { withAuthState };
