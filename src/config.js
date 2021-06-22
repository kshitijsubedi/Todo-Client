/**
 * Application wide configuration.
 */
const config = {
  env: process.env.NODE_ENV,
  basename: process.env.REACT_APP_BASE_NAME,
  baseURI: process.env.REACT_APP_API_BASE_URI,
  sentryDSN: process.env.REACT_APP_SENTRY_DSN,
  endpoints: {
    auth: {
      login: '/users/login',
      register: '/users/register',
    },
    users: {
      self: '/users/me',
    },
    todo: {
      main: '/todo',
      all: '/todo/all',
      create: '/todo/create',
    },
  },
};

export default config;
