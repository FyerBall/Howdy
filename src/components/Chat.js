import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { tempChannels } from '../util/constant';
import Loading from './Loading';
import Avatar from '@material-ui/core/Avatar';
import styled from 'styled-components';

function Chat() {
  const { chatId } = useParams();
  const [info, setInfo] = useState(tempChannels);
  const [isLoading, setIsLoading] = useState(true);
  const [input, setInput] = useState('');
  const [message, setMessage] = useState([]);

  console.log(message);

  const avatarImg = Math.floor(Math.random() * 70);

  useEffect(() => {
    if (chatId) {
      console.log(chatId);
      setIsLoading(true);
      let timeout = setTimeout(() => {
        setIsLoading(false);
        getItem();
      }, 800);

      return () => {
        console.log('Clean up');
        clearTimeout(timeout);
      };
    }
  }, [chatId]);

  const getItem = () => {
    let singleItem = tempChannels.find((item) => item.id === parseInt(chatId));
    setInfo(singleItem);
  };

  if (isLoading) {
    return <Loading />;
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    setMessage([...message, input]);

    setInput('');
  };

  return (
    <ChatStyled>
      {!isLoading && (
        <>
          <div className='header'>
            <Avatar
              alt={info.name}
              src={`https://i.pravatar.cc/150?img=${avatarImg}`}
            />

            <h3 className='name'>{info.name}</h3>
            <p className='last__seen'>
              last seen <small>{info.last_seen}</small>
            </p>
          </div>
          <div className='body'>
            <p className='message receiver'>Hi!!!</p>
            <p className='message '>Yoo!</p>
            {message.map((msg, _id) => (
              <p className='message' key={_id}>
                {msg}
              </p>
            ))}
          </div>

          <div className='footer'>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Say something '
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
            </form>
          </div>
        </>
      )}
    </ChatStyled>
  );
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
`;
export default Chat;
