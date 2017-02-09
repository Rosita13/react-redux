/* eslint linebreak-style: ["error", "windows"]*/

const LOAD = 'redux-example/cooperations/LOAD';
const LOAD_SUCCESS = 'redux-example/cooperations/LOAD_SUCCESS';
const LOAD_FAIL = 'redux-example/cooperations/LOAD_FAIL';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        data: action.result.data,
        error: null
      };
    case LOAD_FAIL:
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
  return globalState.cooperations && globalState.cooperations.loaded;
}

export function load() {
  return {
    types: [LOAD, LOAD_SUCCESS, LOAD_FAIL],
    promise: client => client.get('/cooperations?$sort[createdAt]=-1')
  };
}
