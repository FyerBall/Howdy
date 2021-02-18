import React from 'react';

function Button({ children, classes }) {
  return <button className={`btn ${classes} `}>{children}</button>;
}

export default Button;
