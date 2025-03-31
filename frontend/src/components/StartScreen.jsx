import React from 'react';

const StartScreen = ({numOfQuestions, dispatch}) => {
  return (
    <div>
      <h1>Welcome to React Quiz!</h1>
      <h2>{numOfQuestions} Questions to test your React Mastery</h2>
      <button className='btn' onClick={() => dispatch({type:"start"})}>Let's Start</button>
    </div>
  );
};

export default StartScreen;
