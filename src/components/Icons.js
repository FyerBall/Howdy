import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';

function Icons(item) {
  const { name, icon, url } = item;

  const tooltip = name.toUpperCase();

  return (
    // TODO Conditionally activate Material UI tooltip
    // ? Maybe useEffect to get window width hover state???

    <IconsStyled>
      <Link to={`/demo`}>
        <Tooltip
          title={tooltip}
          placement='right'
          arrow
          TransitionComponent={Zoom}
        >
          <li className=''>
            <span>{icon}</span>
            <p>{name}</p>
          </li>
        </Tooltip>
      </Link>
    </IconsStyled>
  );
}

const IconsStyled = styled.ul`
  font-size: 20px;
  /* width: 200px; */

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

    justify-content: center;
    svg {
      /* margin: 0 15px 0 5px; */
      font-size: 30px;
    }
    &:hover {
      box-shadow: var(--dark-light);
      background: var(--primary-color-light);
    }
    p {
      display: none;
    }
  }

  .active {
    background-color: #6c63ff;
    color: var(--white);
  }

  /* Bigger li padding: 10px 15px; */

  @media (min-width: 1020px) {
    li {
      justify-content: end;
      p {
        display: block;
      }
      svg {
        margin: 0 25px 0 5px;
      }
    }
  }
`;

export default Icons;
