import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { tempChannels } from '../util/constant'
import Loading from './Loading'
import Avatar from '@material-ui/core/Avatar'
import styled from 'styled-components'
import { db } from '../server/firebase'

function Chat() {
  const { chatId } = useParams()

  const [contact, setContact] = useState('')

  const getContactInfo = () => {
    if (chatId) {
      db.collection('people')
        .doc(chatId)
        .onSnapshot((snapshot) => {
          setContact(snapshot.data())
        })
    }
  }

  useEffect(() => {
    getContactInfo()

    return console.log('clean me')
  }, [chatId])

  return (
    <ChatStyled>
      <div className='header'>
        <Avatar src={contact.avatar} alt={contact.name} />
        <h3 className='name'>{contact.name}</h3>
      </div>
    </ChatStyled>
  )
}

const ChatStyled = styled.div`
  .header {
    background-color: var(--body-color);
    padding: 10px;
    display: flex;
    align-items: center;
    border: 1px solid var(--primary-color-light);

    .name {
      margin: 0 5px 0 25px;
    }
    .last__seen {
      display: flex;
      flex-direction: column;
      margin-left: auto;
      align-items: center;
      text-transform: capitalize;

      small {
        font-size: x-small;
      }
    }
  }

  .body {
    height: 64vh;
    overflow: scroll;
    .message {
      background: var(--secondary-color);
      margin: 10px 20px;
      width: fit-content;
      padding: 5px 10px;
      border-radius: var(--radius);
      color: var(--white);
    }
    .receiver {
      margin-left: auto;
      background: var(--black-text);
    }
  }

  .footer {
    input {
      width: 100%;
      padding: 10px;
      outline: none;
      border: none;
      border-radius: 1rem;
    }
  }
`
export default Chat
