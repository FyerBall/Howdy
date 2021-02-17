import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';

import { REQUEST_LOGIN, REQUEST_SIGNUP } from '../Actions/actions';

import { auth, db, provider } from '../server/firebase';

import user_reducer from '../reducers/user_reducer';

const UserContext = createContext();

const initialState = {
  user: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState);

  const signInWithGoogle = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({ type: REQUEST_LOGIN, payload: result.user });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <UserContext.Provider value={{ ...state, signInWithGoogle }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
