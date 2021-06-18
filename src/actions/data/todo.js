export const SET_LOGGING_IN = 'SET_LOGGING_IN';
export const SET_IS_LOGGED_IN = 'SET_IS_LOGGED_IN';
export const SET_LOGGED_IN_USER = 'SET_LOGGED_IN_USER';

/**
 * Action creator for changing loading state for login.
 *
 * @param {boolena} isLoggingIn
 * @returns {object}
 */
export function addTodo(isLoggingIn) {
  return {
    data: isLoggingIn,
    type: SET_LOGGING_IN,
  };
}