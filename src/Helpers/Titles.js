import React from 'react';

export function Title1({ children, underline, text }) {
  return (
    <h1 className={text}>
      {children}
      <div className={underline}></div>
    </h1>
  );
}
export function Title2({ children, underline, text }) {
  return (
    <h2 className={text}>
      {children}
      <div className={underline}></div>
    </h2>
  );
}
export function Title3({ children, underline, text }) {
  return (
    <h3 className={text}>
      {children}
      <div className={underline}></div>
    </h3>
  );
}
export function Title4({ children, underline, text }) {
  return (
    <h4 className={text}>
      {children}
      <div className={underline}></div>
    </h4>
  );
}
export function Title5({ children, underline, text }) {
  return (
    <h5 className={text}>
      {children}
      <div className={underline}></div>
    </h5>
  );
}
export function Title6({ children, underline, text }) {
  return (
    <h6 className={text}>
      {children}
      <div className={underline}></div>
    </h6>
  );
}
