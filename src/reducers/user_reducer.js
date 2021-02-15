import {
  REQUEST_LOGIN,
  REQUEST_SIGNUP,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../Actions/actions';

const user_reducer = (state, action) => {
  if (action.type === REQUEST_LOGIN) {
    return { ...state, loading: true };
  }
  if (action.type === LOGIN_SUCCESS) {
    return {
      ...state,
      user: action.payload.user,
      token: action.payload.auth_token,
      loading: false,
    };
  }
  if (action.type === LOGIN_ERROR) {
    return {
      ...state,
      loading: false,
      errorMessage: action.error,
    };
  }
  // return state;
  throw new Error(`Unknown ${action.type} - action type `);
};

export default user_reducer;
