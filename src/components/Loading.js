import React from 'react';
import loader from '../assets/loader.svg';

function Loading() {
  return (
    <img
      src={loader}
      alt='loading'
      className='full-hight'
      style={{ width: '100%' }}
    />
  );
}

export default Loading;
