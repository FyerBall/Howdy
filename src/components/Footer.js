import React from 'react';
import { Title4 } from '../Helpers/Titles';
import { apps } from '../util/constant';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterStyled className='section-center'>
      <Title4 text='center' underline='primary--underline'>
        Download the Howdy! app now
      </Title4>
      <div className='icons'>
        {apps.map((icon) => (
          <p className='icon' key={icon.id}>
            {icon.logo}
          </p>
        ))}
      </div>
    </FooterStyled>
  );
}

const FooterStyled = styled.footer`
  margin: 30px auto 0;
  padding: 5rem 0;
  text-align: center;

  .icons {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2rem auto 0;
    cursor: pointer;
  }
  .icon {
    margin: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 3rem;
    text-align: center;
    height: 3rem;
    box-shadow: var(--dark-shadow);
    transition: var(--transition);

    background-color: #ffffff;
    border-radius: 4rem;

    &:hover {
      box-shadow: var(--light-shadow);
    }
    svg {
      color: var(--silver);
      font-size: 30px;
    }
  }
`;
export default Footer;
