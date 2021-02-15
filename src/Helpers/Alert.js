import React, { useEffect } from 'react';

function Alert({ message, type, showAlert }) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showAlert();
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, []);
  return <p className={`alert alert-${type}`}>{message}</p>;
}

export default Alert;
