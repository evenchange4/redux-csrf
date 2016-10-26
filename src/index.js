// Hint: Ducks pattern

// ------------------------------------
// 1. Constants
// ------------------------------------
export const SET_CSRFTOKEN = '@@redux-csrf/setCsrfToken';

// ------------------------------------
// 2. Actions Creators
// ------------------------------------
export const actions = {
  setCsrfToken: csrfToken => ({
    type: SET_CSRFTOKEN,
    payload: csrfToken,
  }),
};

// ------------------------------------
// 3. Reducer as default
// ------------------------------------
const initialState = '';

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case SET_CSRFTOKEN:
      return action.payload;
    default:
      return state;
  }
}
