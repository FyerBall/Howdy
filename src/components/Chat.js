import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import { RiInformationLine } from 'react-icons/ri';
import styled from 'styled-components';
import { db } from '../server/firebase';

function Chat() {
  const { roomId } = useParams();
  const [isFav, setIsFav] = useState(false);
  const [roomInfo, setRoomInfo] = useState(null);
  const [chats, setChats] = useState(null);

  useEffect(() => {
    if (roomId) {
      db.collection('channels')
        .doc(roomId)
        .onSnapshot((snapshot) => setRoomInfo(snapshot.id));
    }

    // /channels/TJ6eSbZtTul5I8P9hmjx/messages/MhlmPa1j1iVpvvarBiFX
    console.log(db.collection('channel').doc(roomId).collection('messages'));

    console.log(
      db
        .collection(`channel/${roomId}/message`)
        .onSnapshot((snapshot) => console.log(snapshot))
    );
  }, [roomId]);

  return (
    <ChatStyled>
      <div className='header__left'>
        {/* TODO: Don't show # and star if roomId isn't there
        // ? replace white space with _ .split(' ').join('_') or .replace(/ /g,"_")
        */}
        <p>#{roomInfo} </p>
        <button type='button' onClick={() => setIsFav(!isFav)}>
          {isFav ? <AiTwotoneStar /> : <AiOutlineStar />}
        </button>
      </div>
      <RiInformationLine />
    </ChatStyled>
  );
}

const ChatStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: var(--border-1);
  padding: 0 8px 10px;

  svg {
    font-size: 20px;
    color: var(--secondary-color);
    transition: var(--transition);
    cursor: pointer;
    &:hover {
      color: var(--primary-color);
    }
  }
  .header__left {
    display: flex;
    align-items: center;
    svg {
      margin-left: 3px;
    }
    button {
      background-color: transparent;
      border: none;
      outline: none;
    }
  }
`;
export default Chat;
