import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Avatar from '@material-ui/core/Avatar'

function Contacts({ info }) {
  const { name, id, avatar } = info
  return (
    <ContactsStyled>
      <Link to={`/demo/${id}`}>
        <li>
          <Avatar alt={name} src={avatar} />

          <p>{name}</p>
        </li>
      </Link>
    </ContactsStyled>
  )
}

const ContactsStyled = styled.ul`
  text-transform: capitalize;
  background-color: var(--white);
  margin: 0 auto 10px;
  display: flex;
  align-items: center;

  padding: 5px 7px;
  border-radius: var(--radius);
  cursor: pointer;
  /* TODO: SHAOW and HOVER*/
  box-shadow: var(--dark-shadow);

  transition: var(--transition);

  justify-content: center;
  &:hover {
    box-shadow: var(--dark-light);
    background: var(--primary-color-light);
  }
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #7462f5;
  }

  @media (min-width: 1020px) {
    width: 11rem;
    p {
      margin: 0 5px 0 25px;
    }

    li {
      justify-content: end;
      flex-direction: row;
    }
    a {
      flex-direction: row;
      width: 100%;
    }
  }
`

export default Contacts
