/* eslint-disable */
const POST = 'redux-example/cooperationsave/POST';
const POST_SUCCESS = 'redux-example/cooperationsave/POST_SUCCESS';
const POST_FAIL = 'redux-example/cooperationsave/POST_FAIL';

const initialState = {
  loaded: false,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case POST:
      return {
        ...state,
        loading: true,
      };
    case POST_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        detail: action.result,
        error: null
      };
    case POST_FAIL:
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
  return globalState.cooperationsave && globalState.cooperationsave.loaded;
}

export function save(data) {
  return {
    types: [POST, POST_SUCCESS, POST_FAIL],
    promise: client => client.post('/cooperations', { data: data })
  };
}
