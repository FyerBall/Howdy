import React from 'react';
import logo from '../assets/Icon.svg';
import styled from 'styled-components';
import { navLinks } from '../util/constant';
import { Link, NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <NavStyled>
      <div className='logo__container'>
        <Link to='/'>
          <img src={logo} alt='Howdy' />
        </Link>
        <h3 className='name'>howdy!</h3>
      </div>

      <div className='links'>
        {navLinks.map((link) => {
          const { id, name, url, type } = link;
          return (
            <ul key={id} className=''>
              <Link to={url}>
                <li
                  className={`${
                    type === 'primary' ? 'primary--btn btn' : 'btn'
                  }`}
                >
                  {name}
                </li>
              </Link>
            </ul>
          );
        })}
      </div>
    </NavStyled>
  );
}

const NavStyled = styled.nav`
  background: var(--white);
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 0 3rem;
  .logo__container {
    display: flex;
    align-items: center;

    img {
      margin-right: 10px;
    }
    .name {
      text-transform: capitalize;
    }
  }
  .links {
    display: flex;
    align-items: center;
    li {
      margin-left: 10px;
    }
  }

  .active {
    color: red;
  }
`;

export default Navbar;
