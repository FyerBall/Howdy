import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { REQUEST_LOGIN, REQUEST_SIGNUP } from '../Actions/actions';

import { auth, db } from '../server/firebase';
import user_reducer from '../reducers/user_reducer';

const UserContext = createContext();

const initialState = {
  firstName: '',
  lastName: '',
  email: '',
  error: null,
  isAuth: false,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(user_reducer, initialState);

  const signin = (email, password) => {
    console.log('signin Clicked');
    // return firebase
    //   .auth()
    //   .signInWithEmailAndPassword(email, password)
    //   .then((user) => {
    //     console.log(user);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  };

  const signup = (email, password) => {
    console.log('signup Clicked');
  };

  // useEffect(() => {
  //   const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //     //
  //     } else {
  //       //
  //     }
  //   });

  //   // Cleanup subscription on unmount
  //   return () => unsubscribe();
  // }, []);

  return (
    <UserContext.Provider value={{ ...state, signin, signup }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
