import React, { useEffect, useState } from 'react'
import { sideBarIcons } from '../util/constant'
import Contacts from './Contacts'
import Icons from './Icons'
import styled from 'styled-components'
import { db } from '../server/firebase'

function SidePanel() {
  const [contact, setContact] = useState([])

  useEffect(() => {
    db.collection('people').onSnapshot((snapshot) => {
      setContact(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          avatar: doc.data().avatar,
        }))
      )
    })
    return () => {
      console.log('clean up')
    }
  }, [])

  const addChannel = () => {
    // let createChannel = prompt('Add Channel')
    // setContact(createChannel)
    // if (createChannel) {
    //   db.collection('people').add({
    //     name: createChannel,
    //   })
    // }
    alert('Working on it')
  }

  return (
    <SidebarStyled>
      {sideBarIcons.map((item) => {
        // TODO This needs to be a comp.
        const { name, icon, url, id } = item
        return <Icons key={id} name={name} icon={icon} url={url} />
      })}
      <hr />

      {contact.map((info) => (
        <Contacts key={info.id} info={info} />
      ))}

      <button onClick={addChannel} className='btn primary--btn '>
        Add
      </button>
    </SidebarStyled>
  )
}

const SidebarStyled = styled.aside`
  padding: 10px;
  background: var(--white);

  button {
    display: block;
    margin: 1rem auto;
  }
`
export default SidePanel
