import React from 'react';
import { useContext } from 'react';
import { createContext } from 'react';
import { useReducer } from 'react';

import user_reducer from '../reducers/user_reducer';

const UserContext = createContext();

const initialState = {
  user: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState);

  return (
    <UserContext.Provider value={{ ...state }}>{children}</UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
