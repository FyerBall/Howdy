import React from 'react';
import img from '../assets/BG1.jpg';
import HeroImg from '../assets/HeroImg.svg';
import styled from 'styled-components';
import Button from '../Helpers/Button';
import { Title1 } from '../Helpers/Titles';
import { Link } from 'react-router-dom';
function Hero() {
  return (
    <HeroStyled className='section-center'>
      <img src={HeroImg} alt='people texting' />
      <div className='hero'>
        <Title1 text='hero__text'>
          Free secure Messaging <br /> Whenever, Wherever
        </Title1>

        <p className='hero__info'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis morbi
          et et mi at. Bibendum adipiscing velit, nunc lacinia pulvinar sed. In
          scelerisque tellus lectus fringilla tellus euismod vel purus.
          Facilisis ultrices erat sit penatibus sollicitudin quam.
        </p>
        <Link to='/demo'>
          <Button btnStyle='primary--btn'>Request a Demo</Button>
        </Link>
      </div>
    </HeroStyled>
  );
}

const HeroStyled = styled.main`
  /* background: linear-gradient(
      to top right,
      rgba(56, 66, 81, 0.9),
      rgba(218, 225, 249, 0.6)
    ),
    url(${img}) center center/cover no-repeat;
  height: 50vh;
  color: var(--body-color); */
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 1rem 0 1rem;

  img {
    width: 25rem;
  }

  .hero {
    margin-top: 2rem;
    .hero__text {
      text-transform: capitalize;
    }
    .hero__info {
      display: none;
    }
    button {
      display: none;
      box-shadow: var(--dark-shadow);
      transition: var(--transition);

      &:hover {
        box-shadow: var(--light-shadow);
        letter-spacing: 2px;
      }
    }
  }
  @media (min-width: 880px) {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
    align-items: center;
    gap: 1rem;
    /* padding: 3rem 0; */
    img {
      width: 30rem;
      margin: 0 auto;
    }
    .hero {
      padding: 10px;

      .hero__text {
        letter-spacing: var(--spacing);
      }
      .hero__info,
      button {
        display: inline-block;
      }
      .hero__info {
        line-height: 2;
        margin: 1rem 0;
      }
    }
  }
`;
export default Hero;
