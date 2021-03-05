import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar'
import { Title4 } from '../Helpers/Titles'
import styled from 'styled-components'

function Channels({ id, data }) {
  const name = data.name

  return (
    <ChannelsStyled>
      <Link to={`/demo/${id}`}>
        <Avatar src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png' />
        <div className='info'>
          <Title4>{name}</Title4>
          <small>Last message</small>
        </div>
      </Link>
    </ChannelsStyled>
  )
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
`

export default Channels
