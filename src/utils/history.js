import { createBrowserHistory } from 'history';

import config from '/src/config';

export default createBrowserHistory({ basename: config.basename });
