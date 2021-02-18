import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Button from '../Helpers/Button';
import { Title3 } from '../Helpers/Titles';

function ErrorPage() {
  return (
    <ErrorStyled className='section-center'>
      <Title3 classes='error__message'>
        The page you are looking for doesn't exist
      </Title3>

      <Link to='/'>
        <Button classes='primary--btn'>Go back home</Button>
      </Link>

      <Link to='/demo'>
        <Button classes='primary--btn'>demo</Button>
      </Link>
    </ErrorStyled>
  );
}

const ErrorStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  font-family: 'Poppins', sans-serif;
  text-align: center;
  img {
    width: 30rem;
  }
  .error__message {
    margin: 2rem auto;
  }
  a {
    margin-bottom: 20px;
  }
`;

export default ErrorPage;
