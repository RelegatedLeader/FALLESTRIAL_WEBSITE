import React, { useState } from 'react';

const styles = {
  genreOption: {
    color: 'white',
    fontSize: '16px',
    // Add other style properties as needed
  },
  genreOptionHover: {
    color: 'gold',
  },
  proceed_button: {
    color: 'white',
    backgroundColor: 'green',
  },
  selectedOption: {
    color: 'black',
    backgroundColor: 'gold',
  },
};

export default function NewsPage() {
  const handleMouseOver = (e) => {
    e.currentTarget.style.color = styles.genreOptionHover.color;
  };

  const handleMouseOut = (e) => {
    e.currentTarget.style.color = styles.genreOption.color;
  };

  const [firstTime, setFirstTime] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [optionArray, setoptionArray] = useState([]);

  const handleAnswer = (answer) => {
    setFirstTime(true);
    setUserAnswer(answer);
  };

  const handleOptionArray = (id) => {
    if (optionArray.length < 5 && !optionArray.includes(id)) {
      setoptionArray([...optionArray, id]);
    }
  };

  return (
    <div>
      <h1>News Page</h1>

      {firstTime ? (
        <>
          <h2>
            {userAnswer === 'yes' ? 'Welcome to FALLESTRIAL!' : 'Welcome back!'}
          </h2>
          <h3>Select your interests (up to 5): </h3>

          <div id='option-container'>
            <button
              id='news'
              className='genre-option'
              style={
                optionArray.includes('news')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('news')}
            >
              Daily News
            </button>
            <br />
            <button
              id='finance'
              className='genre-option'
              style={
                optionArray.includes('finance')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('finance')}
            >
              Finance
            </button>
            <br />
            <button
              id='tech'
              className='genre-option'
              style={
                optionArray.includes('tech')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('tech')}
            >
              Tech
            </button>
            <br />
            <button
              id='memes'
              className='genre-option'
              style={
                optionArray.includes('memes')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('memes')}
            >
              Memes
            </button>
            <br />
            <button
              id='sports'
              className='genre-option'
              style={
                optionArray.includes('sports')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('sports')}
            >
              Sports
            </button>
            <br />
            <button
              id='education'
              className='genre-option'
              style={
                optionArray.includes('education')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('education')}
            >
              Education
            </button>
            <br />
            <button
              id='travel'
              className='genre-option'
              style={
                optionArray.includes('travel')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('travel')}
            >
              Travel
            </button>
            <br />
            <button
              id='lifestyle'
              className='genre-option'
              style={
                optionArray.includes('lifestyle')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('lifestyle')}
            >
              Lifestyle
            </button>
            <br />
            <button
              id='environment'
              className='genre-option'
              style={
                optionArray.includes('environment')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('environment')}
            >
              Environment
            </button>
            <br />
            <button
              id='local'
              className='genre-option'
              style={
                optionArray.includes('local')
                  ? { ...styles.selectedOption }
                  : styles.genreOption
              }
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onClick={() => handleOptionArray('local')}
            >
              Local
            </button>
            <br />
            <br />
            <br />
            <button style={styles.proceed_button}>Proceed</button>
          </div>
        </>
      ) : (
        <>
          <h2>Is this your first time on FALLESTRIAL? </h2>
          <button
            id='yes'
            style={styles.genreOption}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleAnswer('yes')}
          >
            Yes
          </button>
          <br />
          <button
            id='no'
            style={styles.genreOption}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onClick={() => handleAnswer('no')}
          >
            No
          </button>
        </>
      )}
    </div>
  );
}
