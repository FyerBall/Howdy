import React from 'react';

export function Title1({ children, underline, classes }) {
  return (
    <h1 className={classes}>
      {children}
      <div className={underline}></div>
    </h1>
  );
}
export function Title2({ children, underline, classes }) {
  return (
    <h2 className={classes}>
      {children}
      <div className={underline}></div>
    </h2>
  );
}
export function Title3({ children, underline, classes }) {
  return (
    <h3 className={classes}>
      {children}
      <div className={underline}></div>
    </h3>
  );
}
export function Title4({ children, underline, classes }) {
  return (
    <h4 className={classes}>
      {children}
      <div className={underline}></div>
    </h4>
  );
}
export function Title5({ children, underline, classes }) {
  return (
    <h5 className={classes}>
      {children}
      <div className={underline}></div>
    </h5>
  );
}
export function Title6({ children, underline, classes }) {
  return (
    <h6 className={classes}>
      {children}
      <div className={underline}></div>
    </h6>
  );
}
