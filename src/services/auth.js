import http from '/src/utils/http';

import config from '/src/config';

import * as tokenService from './token';

/**
 * Send http request for login.
 *
 * @param {{email, password}} payload
 * @returns {Promise<{accessToken}>}
 */
export async function login({ email, password }) {
  const url = config.endpoints.auth.login;

  const { data } = await http.post(url, {
    email,
    password,
  });

  return data;
}
/**
 * Send http request for register.
 *
 * @param  payload
 * @returns {Promise<{accessToken}>}
 */
export async function register({ name, email, password }) {
  const url = config.endpoints.auth.register;
  console.log(url);
  const { data } = await http.post(url, {
    name,
    email,
    password,
  });

  return data;
}

/**
 * Log out of the system.
 *
 * @param {string} Logout
 */
export async function logout() {
  console.log('logout');
  tokenService.clear();
}

export async function refresh(refreshToken) {
  console.log('Refresh Token')
  // const url = config.endpoints.refresh;

  // const { data } = await http.post(url, { refreshToken });

  // return data;
}
