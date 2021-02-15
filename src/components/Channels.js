import React from 'react';
import { Link } from 'react-router-dom';

function Channels({ name }) {
  let tempChannel = name.replace(/\s/g, '');
  let channel = `#${tempChannel}`;

  return (
    <div>
      <Link to={`/demo/${name}`}>{channel}</Link>
    </div>
  );
}

export default Channels;
