/* eslint-disable */
const UPDATE = 'redux-example/cooperationUPDATE/UPDATE';
const UPDATE_SUCCESS = 'redux-example/cooperationUPDATE/UPDATE_SUCCESS';
const UPDATE_FAIL = 'redux-example/cooperationUPDATE/UPDATE_FAIL';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case UPDATE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        detail: action.result,
        error: null
      };
    case UPDATE_FAIL:
      return {
        ...state,
        loading: false,
        loaded: false,
        data: null,
        error: typeof action.error === 'string' ? action.error : 'Error'
      };
    default:
      return state;
  }
}

export function isLoaded(globalState) {
  return globalState.cooperationUpdate && globalState.cooperationUpdate.loaded;
}

export function update(data) {
  return {
    types: [UPDATE, UPDATE_SUCCESS, UPDATE_FAIL],
    promise: client => client.patch(`/cooperations/${data._id}`, {
      data: data
    })
  };
}
