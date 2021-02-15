import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Icons({ item }) {
  const { name, icon, url } = item;
  return (
    <IconsStyled>
      {/* <Link to={url}> */}
      <li className=''>
        <span>{icon}</span>
        {name}
      </li>
      {/* </Link> */}
    </IconsStyled>
  );
}

const IconsStyled = styled.ul`
  font-size: 20px;
  width: 200px;

  li {
    text-transform: capitalize;
    background-color: var(--white);
    margin: 0 auto 10px;
    display: flex;
    align-items: center;
    color: #7462f5;
    padding: 5px 7px;
    border-radius: var(--radius);
    cursor: pointer;
    /* TODO: SHAOW and HOVER*/
    box-shadow: var(--dark-shadow);

    transition: var(--transition);

    svg {
      margin: 0 15px 0 5px;
      font-size: 30px;
    }
    &:hover {
      box-shadow: var(--dark-light);
      background: var(--primary-color-light);
    }
  }

  .active {
    background-color: #6c63ff;
    color: var(--white);
  }

  /* Bigger li padding: 10px 15px; */
`;

export default Icons;
