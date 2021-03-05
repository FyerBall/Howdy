import React, { useState, useEffect } from 'react'
import SidePanel from '../components/SidePanel'
import MainPanel from '../components/MainPanel'
import styled from 'styled-components'
import { Dashboard } from '.'
import { useParams } from 'react-router-dom'
import { db } from '../server/firebase'

function DemoPage() {
  // ???? needed?
  const { chatId } = useParams()
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

  return (
    <DemoPageStyled>
      <SidePanel contact={contact} />
      {chatId ? <MainPanel /> : <Dashboard />}
    </DemoPageStyled>
  )
}

const DemoPageStyled = styled.main`
  height: var(--full-height);
  display: grid;
  grid-template-columns: 20% 1fr;
`

export default DemoPage
