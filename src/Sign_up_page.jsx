import React, { useState } from 'react';
import styles from '../css/signup.module.css';
import Menu from './menu';

export default function Sign_up_page() {
  const [dataAcquired, setDataAcquired] = useState(false);
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const validate_sign_up = (e) => {
    e.preventDefault();

    let first_name = document.getElementById('firstName');
    let last_name = document.getElementById('lastName');
    let username = document.getElementById('username');
    let password = document.getElementById('password');

    let first_name_value = first_name.value;
    let last_name_value = last_name.value;
    let username_value = username.value;
    let password_value = password.value;

    if (
      first_name_value === '' ||
      last_name_value === '' ||
      username_value === '' ||
      password_value === ''
    ) {
      alert('Please enter all the credentials...');
    } else {
      // Save user data in localStorage
      localStorage.setItem('userData', JSON.stringify(userData));

      // Set dataAcquired to true after saving to localStorage
      setDataAcquired(true);
    }
  };

  if (dataAcquired) {
    alert(
      'You have successfully signed up, now you are being redirected to the main page...'
    );
    return <Menu />;
  }

  return (
    <div>
      <h1>Sign up</h1>

      <h2>
        Don't worry, it's fast, simple, and your data will be scattered as soon
        as you sign up!
      </h2>
      <br />
      <br />
      <form onSubmit={validate_sign_up}>
        <label htmlFor='first_name' className={styles.label}>
          First Name
        </label>
        <input
          type='text'
          id='firstName'
          placeholder='First Name'
          className={styles.input}
          value={userData.firstName}
          onChange={handleChange}
        />
        <label htmlFor='last_name' className={styles.label}>
          Last Name:
        </label>
        <input
          type='text'
          id='lastName'
          placeholder='Last Name'
          className={styles.input}
          value={userData.lastName}
          onChange={handleChange}
        />
        <label htmlFor='username' className={styles.label}>
          Username
        </label>
        <input
          type='text'
          id='username'
          placeholder='Username'
          className={styles.input}
          value={userData.username}
          onChange={handleChange}
        />
        <label htmlFor='password' className={styles.label}>
          Password
        </label>
        <input
          type='password'
          id='password'
          placeholder='Password'
          className={styles.input}
          value={userData.password}
          onChange={handleChange}
        />

        <button type='submit'>Sign up!</button>
      </form>
    </div>
  );
}
