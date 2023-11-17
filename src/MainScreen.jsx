// MainScreen.js
import React, { useState, useEffect } from 'react';
import '../css/MainScreen.css';

export default function MainScreen() {
  const [thoughts, setThoughts] = useState([]);
  const [currentThought, setCurrentThought] = useState('');

  // Load thoughts from localStorage on component mount
  useEffect(() => {
    const savedThoughts = localStorage.getItem('savedThoughts'); ///get the thoughts from local storage
    if (savedThoughts) {
      //if there are any
      setThoughts(JSON.parse(savedThoughts)); //set them  and parse them ready to be used ,this happens at all times
    }
  }, []);

  const handleCheckboxChange = (index) => {
    const updatedThoughts = [...thoughts]; //spreading the thoughts into the new updatedThoughts
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
    // Check if the user has entered something
    if (currentThought.trim() === '') {
      alert('Please enter a thought before submitting.');
      return;
    }

    // Save thought to localStorage
    const updatedThoughts = [
      ...thoughts,
      { text: currentThought, checked: false },
    ]; //a new object { text: currentThought, checked: false } is added to the end of the updatedThoughts array.
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
    <div>
      <div id='whole_nav_bar'>
        <h1>FALLESTRIAL</h1>

        <ul>
          <li id='nav_bar'>
            <a href='#'>Home</a>
            <a href='#'>Me</a>
            <a href='#'>Friends</a>
            <a href='#'>Friends</a>
          </li>
        </ul>
      </div>

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
        <button id='set_thought_button' type='button' onClick={handleSubmit}>
          Submit
        </button>
      </form>

      {/* Display the saved thoughts with checkboxes */}
      <div>
        <h2>Your Thoughts:</h2>
        <ul>
          {thoughts.map((thought, index) => (
            <li key={index}>
              <input
                type='checkbox'
                checked={thought.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              {thought.text}
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
  );
}
