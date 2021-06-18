import axios from 'axios';

import config from '/src/config';

/**
 * Http Utility.
 */
const http = axios.create({
  baseURL: config.baseURI,
  headers: {
    'Content-Type': 'application/json',
  },
});

export { http as default };
