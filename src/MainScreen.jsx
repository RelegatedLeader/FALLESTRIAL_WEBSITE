// MainScreen.js
import React, { useState, useEffect } from 'react';
import '../css/MainScreen.css';
import Settings from './settings';
import MePage from './MePage';
import FriendsPage from './FriendsPage';
import NewsPage from './NewsPage';

//YOU HAVE TO RESOLVEE THE BACK BUTTON! ITS NOT WORKING OR ADD YOUR OWN FOR NOW, YOU NEED A BACK BUTTON OR
//SOMETHING THAT ALLOWS YOU TO GO AROUND YOUR WEBSITE, THAT IS FOR SURE ...

export default function MainScreen() {
  const [thoughts, setThoughts] = useState([]);
  const [currentThought, setCurrentThought] = useState('');

  // Load thoughts from localStorage on component mount
  useEffect(() => {
    const savedThoughts = localStorage.getItem('savedThoughts');
    if (savedThoughts) {
      setThoughts(JSON.parse(savedThoughts));
    }
  }, []);

  const handleCheckboxChange = (index) => {
    const updatedThoughts = [...thoughts];
    updatedThoughts[index].checked = !updatedThoughts[index].checked;
    setThoughts(updatedThoughts);
  };

  const handleDelete = () => {
    const updatedThoughts = thoughts.filter((thought) => !thought.checked);
    localStorage.setItem('savedThoughts', JSON.stringify(updatedThoughts));
    setThoughts(updatedThoughts);
    alert('Selected thoughts deleted!');
  };

  const handleDeleteAll = () => {
    localStorage.removeItem('savedThoughts');
    setThoughts([]);
    alert('All thoughts deleted!');
  };

  const handleSubmit = () => {
    if (currentThought.trim() === '') {
      alert('Please enter a thought before submitting.');
      return;
    }

    const updatedThoughts = [
      ...thoughts,
      { text: currentThought, checked: false },
    ];
    if (localStorage) {
      localStorage.setItem('savedThoughts', JSON.stringify(updatedThoughts));
      setThoughts(updatedThoughts);
      setCurrentThought('');
      alert('Thought submitted!');
    } else {
      alert(
        'Local storage is not supported. Please use a different browser or enable local storage.'
      );
    }
  };

  //redirecting to pages
  const [homeClicked, setHomeClicked] = useState(false);
  const [MeClicked, setMeClicked] = useState(false);
  const [FriendsClicked, setFriendsClicked] = useState(false);
  const [newsClicked, setNewsClicked] = useState(false);
  const [settingsClicked, setSettingsClicked] = useState(false);

  //validating methods
  const validate_home_click = () => {
    setHomeClicked(true);
  };

  const validate_Me_page = () => {
    setMeClicked(true);
    // Update state to trigger navigation
    setHomeClicked(false);
    setFriendsClicked(false);
    setNewsClicked(false);
    setSettingsClicked(false);
  };

  const validate_Friends_page = () => {
    setFriendsClicked(true);
  };

  const validate_News_page = () => {
    setNewsClicked(true);
  };

  const validate_settings_page = () => {
    setSettingsClicked(true);
  };
  //redirecting if statements
  /**if (homeClicked) {
    
  } */

  if (MeClicked) {
    return <MePage />;
  }
  if (FriendsClicked) {
    return <FriendsPage />;
  }
  if (newsClicked) {
    return <NewsPage />;
  }

  if (settingsClicked) {
    return <Settings />;
  }

  return (
    <div className='main-container'>
      <div className='left-nav'>
        <img src='img\side_menu.jpg' alt='side menu logo' id='side_bar_menu' />
        <img
          src='img\fallestrial_without_background_logo.png'
          alt='fallestrial logo'
          id='fallestrial_logo'
        />
      </div>

      <div className='content'>
        <ul id='nav_bar'>
          <a href='#' onClick={validate_home_click}>
            Home
          </a>
          <a href='#' onClick={validate_Me_page}>
            Me
          </a>
          <a href='#' onClick={validate_Friends_page}>
            Friends
          </a>
          <a href='#' onClick={validate_News_page}>
            News
          </a>
          <img
            src='img\settings_.jpg'
            alt='settings icon'
            id='settings_icon'
            onClick={validate_settings_page}
          />
        </ul>

        <div className='status-form'>
          <form>
            <label htmlFor='thoughts'>Your Thoughts:</label>
            <input
              type='text'
              id='thoughts'
              name='thoughts'
              placeholder='Enter your thoughts'
              value={currentThought}
              onChange={(e) => setCurrentThought(e.target.value)}
            />
            <button type='button' onClick={handleSubmit}>
              Submit
            </button>
          </form>
        </div>

        {/* Display the saved thoughts with checkboxes */}
        <div className='thoughts-list'>
          <h2>Your Thoughts:</h2>
          <ul>
            {thoughts.map((thought, index) => (
              <li key={index}>
                <input
                  type='checkbox'
                  checked={thought.checked}
                  onChange={() => handleCheckboxChange(index)}
                />
                <span>{thought.text}</span>
              </li>
            ))}
          </ul>
          <div>
            {thoughts.some((thought) => thought.checked) && (
              <button type='button' onClick={handleDelete}>
                Delete Selected
              </button>
            )}
            {thoughts.length > 0 && (
              <button type='button' onClick={handleDeleteAll}>
                Delete All
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
