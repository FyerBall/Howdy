import React from 'react';
import styled from 'styled-components';
import { features } from '../util/constant';
import { Title5 } from './Titles';

function Card() {
  return (
    <CardStyled>
      {features.map((feature) => {
        const { id, icon, text, info } = feature;
        return (
          <div className='card' key={id}>
            <span className='icon'>{icon}</span>
            <Title5 text='text'>{text}</Title5>
            <small className='info'>{info}</small>
          </div>
        );
      })}
    </CardStyled>
  );
}

const CardStyled = styled.article`
  background-color: #fff;
  border-radius: var(--radius);
  padding: 30px 20px;
  margin: 30px 0;

  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr;

  .card {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: var(--primary-color-light);
    border-radius: var(--radius-2);
    padding: 30px;
    cursor: pointer;

    box-shadow: var(--dark-shadow);
    transition: var(--transition);

    &:hover {
      box-shadow: var(--light-shadow);
    }

    .icon {
      color: var(--primary-color);
      font-size: 60px;
      margin-bottom: 15px;
    }
    .text {
      margin-bottom: 20px;
    }
    .info {
      color: var(--secondary-text);
      letter-spacing: var(--spacing);
    }
  }

  @media (min-width: 1240px) {
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  }
`;
export default Card;
