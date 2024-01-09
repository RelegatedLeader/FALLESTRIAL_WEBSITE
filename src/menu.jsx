// Menu.js
import React, { useState } from 'react';
import '../css/menu.css';
import MainScreen from './MainScreen';
import Sign_up_page from './sign_up_page';

const prop_username = 'relegatedleader';
const prop_password = 'password';

export default function Menu() {
  const [curr_username, set_curr_username] = useState('');
  const [curr_password, set_curr_password] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [newUser, setNewUser] = useState(false);
  const validate_password = () => {
    if (curr_username === prop_username && curr_password === prop_password) {
      setLoggedIn(true);
      alert('Login successful!');
    } else {
      alert('Invalid username or password');
    }
  };

  if (loggedIn) {
    return <MainScreen />;
  }
  const new_user_validation = () => {
    setNewUser(true);
  };

  if (newUser) {
    return <Sign_up_page />;
  }

  return (
    <div className='menu-container'>
      <div className='container'>
        <img
          src='img\fallestrial_without_background_logo.png'
          alt='Fallestrial Logo'
          id='fallestrial_logo'
        />
        <form>
          <label htmlFor='username'>Username</label>
          <input
            type='text'
            id='username'
            name='username'
            placeholder='Username'
            value={curr_username}
            onChange={(e) => set_curr_username(e.target.value)}
          />
          <br />
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            placeholder='Password'
            value={curr_password}
            onChange={(e) => set_curr_password(e.target.value)}
          />
          <br />
          <button id='login_button' onClick={validate_password}>
            Login
          </button>
          <br />
          <p>
            New to Fallestrial?{' '}
            <a href='#' onClick={new_user_validation}>
              Sign Up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
