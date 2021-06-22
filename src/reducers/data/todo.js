import {
  REQUEST_SUCCESS,
  REQUEST_FAILURE,
  REQUEST_STARTED,
  ACTIVE_FILTER,
  UPDATE_ALL_TODO,
} from '/src/actions/data/todo';

const initialState = {
  toggle: true,
  loading: false,
  todos: [],
  error: null,
  activefilter: 'all',
  filters: [
    {
      name: 'all',
      label: 'All Tasks',
      method: function (item) {
        return item;
      },
    },
    {
      name: 'active',
      label: 'Active',
      method: function (item) {
        return item.completed === false;
      },
    },
    {
      name: 'completed',
      label: 'Completed',
      method: function (item) {
        return item.completed === true;
      },
    },
  ],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case UPDATE_ALL_TODO:
      return {
        ...state,
        todos: action.payload,
      };
    case REQUEST_STARTED:
      return {
        ...state,
        loading: true,
      };
    case REQUEST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        toggle: state.toggle ? false : true,
      };
    case REQUEST_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    case ACTIVE_FILTER:
      return {
        ...state,
        activefilter: action.payload,
      };
    default:
      return state;
  }
}
