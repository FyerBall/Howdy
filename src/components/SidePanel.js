import React, { useEffect, useState } from 'react';
import { sideBarIcons, tempChannels } from '../util/constant';
import Channels from './Channels';
import Icons from './Icons';
import { AiOutlinePlus } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import styled from 'styled-components';
import { db } from '../server/firebase';
import Avatar from '@material-ui/core/Avatar';
import { useUserContext } from '../context/user_context';

// TODO isAuth ? "Hey, name!" : "hey, stranger!" in HOME OR MAIN PANEL
function SidePanel() {
  // const [isVisible, setIsVisible] = React.useState(false);
  // const toggleVisibility = () => setIsVisible(!isVisible);

  const [channels, setChannels] = useState([]);

  const { user } = useUserContext();

  const addChannel = () => {
    const channelName = prompt('Please enter a name for your channel');
    if (!channelName) {
      console.log('Canceled');
    }
    if (channelName) {
      db.collection('channels').add({
        name: channelName,
      });
    }
  };

  useEffect(() => {
    //  db.collection('channels').onS;
    db.collection('channels').onSnapshot((snapshot) =>
      setChannels(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []);

  return (
    <SidePanelStyled>
      <div className='top'>
        <Avatar alt={user?.displayName} src={user?.photoURL} />
        <FiSettings size={23} className='setting' />
      </div>

      <hr />
      {channels.map((channel) => (
        <Channels key={channel.id} {...channel} />
      ))}

      <button type='button' onClick={addChannel}>
        <AiOutlinePlus />
        start your own
      </button>
      {/* + start your own btn */}
      {/* Cool group => coolgroup or coolGroup */}
      {/* Min is 3 char. */}
    </SidePanelStyled>
  );
}

const SidePanelStyled = styled.aside`
  background: var(--white);
  /* display: grid;
  align-items: center;
  justify-content: center;
  width: 220px; */
  /* padding: 0.5rem; */
  flex: 0.3;
  margin-right: 5px;

  .top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;

    .setting {
      cursor: pointer;
      transition: var(--transition);
      border-radius: 50%;
      box-shadow: var(--dark-shadow);

      &:hover {
        color: var(--secondary-color);
      }
      &:active {
        box-shadow: var(--dark-light);
      }
    }
  }

  /* ≈ 1090px  -> width: 260px; */
  /* ≈ 900px  -> width: 240px; */
  /* ≈ 850px  -> width: 220px; */
`;

export default SidePanel;
