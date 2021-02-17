import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import { Title4 } from '../Helpers/Titles';
import styled from 'styled-components';
import { db } from '../server/firebase';

function Channels({ id, data }) {
  const name = data.name;
  const [seed, setSeed] = useState();

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  return (
    <ChannelsStyled>
      <Link to={`/demo/${id}`}>
        <Avatar
          src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}
        />
        <div className='info'>
          <Title4>{name}</Title4>
          <small>Last message</small>
        </div>
      </Link>
    </ChannelsStyled>
  );
}

const ChannelsStyled = styled.div`
  a {
    background: var(--body-color);
    display: flex;
    margin: 10px 5px;
    padding: 10px 15px;
    cursor: pointer;
    transition: var(--transition);
    border: 1px solid transparent;
    border-radius: var(--radius);
    &:hover {
      background: var(--white);
      border: 1px solid var(--primary-color);
    }
  }
  .info {
    display: flex;
    align-items: center;
    flex-direction: column;
    line-height: var(--light-hight);

    small {
      white-space: nowrap;
    }
  }
`;

export default Channels;
