import WebFont from 'webfontloader';
import http from '/src/utils/http.js';
import * as interceptors from '/src/commons/interceptors.js';

/**
 * Initialize interceptors for the application.
 */
function initInterceptors() {
  http.interceptors.request.use(interceptors.requestInterceptor);
  http.interceptors.response.use(
    response => response,
    /**
     * This interceptor checks if the response had a 401 status code, which means
     * that the access token used for the request has expired. It then refreshes
     * the access token and resends the original request.
     */
    err => interceptors.responseInterceptor(err)
  );
}

function webFonts(){
  WebFont.load({
    google: {
      families: ['QuickSand:600','DM Sans:400,500,700','Poppins','Roboto', 'sans-serif']
    }
  });
}

export default function init() {
  initInterceptors();
  webFonts();
}
