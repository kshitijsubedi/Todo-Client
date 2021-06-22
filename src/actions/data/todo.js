export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';
export const REQUEST_STARTED = 'REQUEST_STARTED';
export const DELETE_TODO = 'DELETE_TODO';
export const ACTIVE_FILTER = 'ACTIVE_FILTER';
export const UPDATE_ALL_TODO = 'UPDATE_ALL_TODO';

import http from '/src/utils/http';
import config from '/src/config';

export const addTodo = ({ item }) => {
  const url = config.endpoints.todo.create;
  return (dispatch, getState) => {
    dispatch(requestStarted());
    http
      .post(url, {
        item,
      })
      .then(res => {
        dispatch(syncTodo());
      })
      .catch(err => {
        dispatch(requestFailure(err.message));
      });
  };
};

export const syncTodo = () => {
  const url = config.endpoints.todo.all;
  return (dispatch, getState) => {
    dispatch(requestStarted());
    http
      .get(url)
      .then(res => {
        dispatch(allTodo(res.data.data));
        dispatch(requestSuccess());
      })
      .catch(err => {
        dispatch(requestFailure(err.message));
      });
  };
};

export const checkTask = (id, check) => {
  const url = config.endpoints.todo.main;
  return (dispatch, getState) => {
    dispatch(requestStarted());
    http
      .put(`${url}/${id}`, {
        completed: check,
      })
      .then(res => {
        dispatch(syncTodo());
      })
      .catch(err => {
        dispatch(requestFailure(err.message));
      });
  };
};

export const removeTask = id => {
  const url = config.endpoints.todo.main;
  return (dispatch, getState) => {
    dispatch(requestStarted());
    http
      .delete(`${url}/${id}`)
      .then(res => {
        dispatch(syncTodo());
      })
      .catch(err => {
        dispatch(requestFailure(err.message));
      });
  };
};

const allTodo = list => ({
  type: UPDATE_ALL_TODO,
  payload: list,
});

const requestSuccess = todo => ({
  type: REQUEST_SUCCESS,
});

const requestStarted = () => ({
  type: REQUEST_STARTED,
});

const requestFailure = error => ({
  type: REQUEST_FAILURE,
  payload: {
    error,
  },
});

export const activeFilter = name => ({
  type: ACTIVE_FILTER,
  payload: name,
});
