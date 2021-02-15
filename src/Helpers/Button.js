import React from 'react';

const STYLES = ['btn', 'primary--btn', 'primary--btn-center'];

function Button({ children, btnStyle }) {
  const checkBtnStyle = STYLES.includes(btnStyle) ? btnStyle : STYLES[0];

  return <button className={`btn ${checkBtnStyle} `}>{children}</button>;
}

export default Button;
