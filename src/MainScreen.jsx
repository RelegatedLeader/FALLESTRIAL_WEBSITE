// MainScreen.js
import React, { useState, useEffect } from 'react';
import '../css/MainScreen.css';

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
          <a href='#'>Home</a>
          <a href='#'>Me</a>
          <a href='#'>Friends</a>
          <a href='#'>Friends</a>
          <img src='img\settings_.jpg' alt='settings icon' id='settings_icon' />
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
