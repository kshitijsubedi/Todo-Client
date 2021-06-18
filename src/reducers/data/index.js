import { combineReducers } from 'redux';

import auth from './auth';
import { todos,visibilityFilter } from './todo';

export default combineReducers({
  auth, todos,visibilityFilter
});
