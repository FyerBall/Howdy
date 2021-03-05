import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Loading from './Loading'
import Avatar from '@material-ui/core/Avatar'
import styled from 'styled-components'
import { db } from '../server/firebase'
import Moment from 'react-moment'
import firebase from 'firebase'

function Chat() {
  const { chatId } = useParams()
  const [contact, setContact] = useState()
  const [isLoading, setIsLoading] = useState(true)
  const [messages, setMessages] = useState()
  const [input, setInput] = useState('')

  const getContactInfo = () => {
    if (chatId) {
      db.collection('people')
        .doc(chatId)
        .onSnapshot((snapshot) => {
          setContact(snapshot.data())
        })
    }
  }

  const getMessages = () => {
    if (chatId) {
      setIsLoading(true)
      db.collection('people')
        .doc(chatId)
        .collection('chat')
        .onSnapshot((snapshot) => {
          setMessages(
            snapshot.docs.map((doc) => ({
              message: doc.data().message,
              timestamp: doc.data().timestamp,
              id: doc.id,
            }))
          )
          setIsLoading(false)
        })
    }
  }

  useEffect(() => {
    getContactInfo()
    getMessages()
  }, [chatId])

  const handleKeyPress = (e) => {
    // e.preventDefault()
    if (e.which === 13) {
      if (chatId) {
        db.collection('people').doc(chatId).collection('chat').add({
          message: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp(),

          user: 'chatty',
        })
      }
      setInput('')
    }
  }

  return (
    <ChatStyled>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className='header'>
            <Avatar src={contact.avatar} alt={contact.name} />
            <h3 className='name'>{contact.name}</h3>
            <div className='last__seen'>
              <p>last seen</p>
              <small>12 hours ago</small>
            </div>
          </div>
          <div className='body'>
            {/* TODO: Message component */}
            {messages.map(({ id, message, timestamp }) => (
              <p key={id} className='message sender'>
                {message}
                <small className='time'>
                  {/* <Moment unix fromNow> */}
                  {/* {timestamp?.seconds} */}
                  {/* </Moment> */}
                </small>
              </p>
            ))}
            <p className='message receiver'>Hey</p>
          </div>
          <div className='footer'>
            <input
              type='text'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
            />
          </div>
        </>
      )}
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
      display: flex;
      flex-direction: column;
      align-items: center;

      margin: 20px;
      width: fit-content;
      padding: 5px 10px;
      border-radius: var(--radius);
      color: var(--white);
    }
    .sender {
      background: var(--secondary-color);
      margin-left: auto;
    }
    .receiver {
      margin-right: auto;
      background: var(--black-text);
    }
    .time {
      color: #d1d5db;
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
