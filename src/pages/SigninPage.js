// TODO Useref for the input??
// ? Copy past from sign up check if it needs adj.
import React, { useState } from 'react';
import logo from '../assets/Icon.svg';
import { Title2, Title4 } from '../Helpers/Titles';
import Button from '../Helpers/Button';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Alert from '../Helpers/Alert';
import { useUserContext } from '../context/user_context';
function SigninPage() {
  let user = {
    email: '',
    password: '',
  };

  const { signInWithGoogle, signup } = useUserContext();

  const [userInfo, setUserInfo] = useState(user);
  const [alert, setAlert] = useState({
    show: false,
    message: '',
    type: '',
  });
  const handleChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    checkForm();
  };

  const checkForm = () => {
    isEmpty();
    checkPassword();
  };
  const isEmpty = () => {
    if (!userInfo.email.length || !userInfo.password.length) {
      showAlert(true, 'please enter a your email and password ', 'danger');
    }
  };

  const checkPassword = () => {
    if (userInfo.password.length < 8) {
      showAlert(true, 'password must be more than 8 char. ', 'danger');
    }
  };

  // ? DEFAULT ALERT
  const showAlert = (show = false, message = '', type = '') => {
    setAlert({ show, message, type });
  };

  return (
    <SignInStyled>
      <div className='header'>
        <img src={logo} alt='Howdy' />
        <Title2>Sign in to Howdy</Title2>
        <p>Messaging App - Testing</p>
      </div>
      {/* TODO: Button component didn't work for on click */}
      <button onClick={signInWithGoogle}>
        <FcGoogle />
        Continue with Google
      </button>
      <form onSubmit={handleSubmit}>
        {alert.show && <Alert {...alert} showAlert={showAlert} />}

        <Title4 text='center option' underline='secondary--underline'>
          or
        </Title4>

        <input
          type='email'
          name='email'
          value={userInfo.email}
          onChange={handleChange}
          placeholder='enter your email or username'
        />
        <input
          type='password'
          name='password'
          value={userInfo.password}
          onChange={handleChange}
          placeholder='enter your password'
        />

        <Button type='submit' btnStyle='primary--btn'>
          Sign In
        </Button>
      </form>

      <p>
        Don't have an account? <Link to='/signin'>Sign Up</Link>
      </p>
    </SignInStyled>
  );
}

const SignInStyled = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: var(--full-height);
  padding: 2rem 0;

  .header {
    margin-bottom: 2rem;
    text-align: center;

    img {
      display: block;
      margin: 0 auto;
    }
  }
  .option {
    text-transform: uppercase;
    margin-bottom: 10px;
    letter-spacing: var(--spacing);
    line-height: 2;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin: 10px auto;
      outline: none;
      border: 1px solid var(--primary-color);
      border-radius: var(--radius);
      padding: 15px 10px;
      width: 20rem;
      letter-spacing: var(--spacing);
      color: var(--secondary-text);
      font-weight: bold;
    }
  }
  button {
    margin: 1rem auto;
    display: flex;
    align-items: center;
    svg {
      font-size: 30px;
      margin-right: 10px;
    }
  }
  a {
    color: var(--primary-color);
  }

  @media (min-width: 755px) {
    .option {
      margin: 0;
    }
    button {
      margin: 1rem auto;
    }
  }
`;
export default SigninPage;
