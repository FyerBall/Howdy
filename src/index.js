import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { UserProvider } from './context/user_context';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,

  document.getElementById('root')
);
