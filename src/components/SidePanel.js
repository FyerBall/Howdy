import React, { useEffect, useState } from 'react';
import { sideBarIcons, tempChannels } from '../util/constant';
import Channels from './Channels';
import Icons from './Icons';
import { AiOutlinePlus } from 'react-icons/ai';
import styled from 'styled-components';
import { db } from '../server/firebase';

// TODO isAuth ? "Hey, name!" : "hey, stranger!" in HOME OR MAIN PANEL
function SidePanel() {
  // const [isVisible, setIsVisible] = React.useState(false);
  // const toggleVisibility = () => setIsVisible(!isVisible);

  const [channels, setChannels] = useState([]);

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
          name: doc.data().name,
        }))
      )
    );
  }, []);

  return (
    <SidePanelStyled>
      {/* TODO: Show the first 3 then toggle show more */}

      <div className='top'>
        {sideBarIcons.map((item) => (
          <Icons
            key={item.id}
            item={item}
            // isVisible={isVisible}
            // toggleVisibility={toggleVisibility}
          />
        ))}
      </div>
      <hr />

      {channels.map((channel) => (
        <Channels key={channel.id} name={channel.name} />
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
  background: #fefdfb;
  background: lightblue;
  /* display: grid;
  align-items: center;
  justify-content: center;
  width: 220px; */
  padding: 1rem;
  flex: 0.3;

  /* ≈ 1090px  -> width: 260px; */
  /* ≈ 900px  -> width: 240px; */
  /* ≈ 850px  -> width: 220px; */
`;

export default SidePanel;
