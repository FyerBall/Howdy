import React, { useEffect, useState } from 'react';
import { MdAttachFile } from 'react-icons/md';
import { RiInformationLine, RiSearch2Line } from 'react-icons/ri';
import styled from 'styled-components';
import { db } from '../server/firebase';
import { Title4 } from '../Helpers/Titles';
import Avatar from '@material-ui/core/Avatar';
import { useParams } from 'react-router-dom';

function Chat() {
  const [seed, setSeed] = useState();
  const [text, setText] = useState('');
  const [chats, setChats] = useState('');
  const [messages, setMessages] = useState([]);
  const { chatId } = useParams();

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setText('');
  };
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 1000));
  }, []);

  useEffect(() => {
    if (chatId) {
      db.collection('channels')
        .doc(chatId)
        .onSnapshot((snapchat) => {
          setChats(snapchat.data().name);
        });

      db.collection('channels')
        .doc(chatId)
        .collection('messages')
        .orderBy('timestamp', 'asc')
        .onSnapshot((snapshot) => {
          console.log(snapshot.docs.map((doc) => doc.data()));
          // setMessages(snapshot.docs.map((doc) => doc.data()));
        });
    }
  }, [chatId]);
  return (
    <ChatStyled>
      <div className='nav'>
        <div className='nav__left'>
          <div className='input__container'>
            <input type='text' placeholder='search or start new chat' />
            <RiSearch2Line />
          </div>
        </div>
      </div>

      <div className='header'>
        <div className='info'>
          <Avatar
            src={`https://avatars.dicebear.com/4.5/api/human/${seed}.svg`}
          />
          <div className=''>
            <Title4>{chats}</Title4>
            <small>Last message</small>
          </div>
        </div>
        <div className='icons'>
          <MdAttachFile />
          <RiInformationLine className='info-icon' />
        </div>
      </div>

      <div className='chat__body'>
        {messages.map((msg) => console.log(msg))}
        <p className='message reciever'>
          Whats up!?
          <small className='timestamp'>4:20 pm</small>
        </p>
        <p className='message'>Whats up!?</p>
      </div>

      <div className='chat__footer'>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder="share what's on your mind"
            value={text}
            onChange={handleChange}
          />
          <button>Send</button>
        </form>
      </div>
    </ChatStyled>
  );
}

const ChatStyled = styled.div`
  svg {
    font-size: 20px;
    color: var(--secondary-color);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
  }
  height: var(--full-height);
  .nav {
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: var(--border-1);
    padding: 8px 10px;

    .nav__left {
      display: flex;
      align-items: center;
      /* margin-left: auto; */
      width: 80%;
      svg {
        margin-left: 3px;
      }
      button {
        background-color: transparent;
        border: none;
        outline: none;
      }
      .input__container {
        background-color: var(--white);
        display: flex;
        align-items: center;
        padding: 5px;
        border-radius: var(--radius);
        width: 100%;

        input {
          border: none;
          outline: none;
          padding: 10px;
          /* border-radius: var(--radius); */
          /* background-color: var(--white); */
          background-color: transparent;
          letter-spacing: var(--spacing);
          width: 100%;
        }
      }
    }
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--white);
    padding: 10px;
    border-radius: var(--radius);
    .info {
      display: flex;
      div:last-child {
        margin-left: 15px;
      }
    }
  }

  .chat__body {
    position: relative;

    padding-top: 40px;
    .message {
      background-color: #aca7ff;
      padding: 10px;
      border-radius: var(--radius);
      width: fit-content;
      margin-bottom: 25px;
    }
    .timestamp {
      color: red;
      font-size: x-small;
      margin-left: 20px;
    }

    .reciever {
      margin-left: auto;
      background-color: var(--primary-color-light);
    }
  }

  .chat__footer {
    position: absolute;
    bottom: 0;
    width: 60%;

    form {
      input {
        width: 100%;
      }
      button {
        display: none;
      }
    }
  }
`;
export default Chat;
