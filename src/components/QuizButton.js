// src/components/QuizButton.js
import React from 'react';
import './QuizButton.css';

const QuizButton = ({ text, onClick, selected, correct }) => {
  let className = 'quiz-button';
  if (selected) {
    className += correct ? ' correct' : ' wrong';
  }

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default QuizButton;
