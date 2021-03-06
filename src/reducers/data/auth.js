import { SET_LOGGING_IN, SET_IS_LOGGED_IN, SET_LOGGED_IN_USER, SET_REGISTERING_IN } from '/src/actions/data/auth.js';

const INITIAL_STATE = {
  isLoggedIn: false,
  isLoggingIn: false,
  isRegisteringIn: false,
  user: {},
};

export default function (authState = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_LOGGING_IN:
      return {
        ...authState,
        isLoggingIn: action.data,
      };

    case SET_IS_LOGGED_IN:
      return {
        ...authState,
        isLoggedIn: action.data,
      };

    case SET_LOGGED_IN_USER:
      return {
        ...authState,
        user: action.data,
      };
    case SET_REGISTERING_IN:
      return {
        ...authState,
        isRegisteringIn: action.data,
      };
    default:
      return authState;
  }
}
