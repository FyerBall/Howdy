import {
  REQUEST_LOGIN,
  REQUEST_SIGNUP,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
} from '../Actions/actions';

const user_reducer = (state, action) => {
  if (action.type === REQUEST_LOGIN) {
    console.log('action log', action.payload);
    return { ...state, user: action.payload };
  }

  // return state;
  throw new Error(`Unknown ${action.type} - action type `);
};

export default user_reducer;
