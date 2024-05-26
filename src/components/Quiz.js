// src/components/Quiz.js
import React, { useState } from 'react';
import QuizButton from './QuizButton';
import './Quiz.css';

const Quiz = ({ question, options, correctAnswer, justification }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showExplanation, setShowExplanation] = useState(false);

  const handleAnswerClick = (index) => {
    setSelectedAnswer(index);
  };

  return (
    <div className="quiz-container">
      <h2>{question}</h2>
      <div className="options">
        {options.map((option, index) => (
          <QuizButton
            key={index}
            text={option}
            onClick={() => handleAnswerClick(index)}
            selected={selectedAnswer !== null}
            correct={index === correctAnswer}
          />
        ))}
      </div>
      {selectedAnswer !== null && (
        <button onClick={() => setShowExplanation(!showExplanation)}>
          Explanation
        </button>
      )}
      {showExplanation && (
        <div className="justification">
          {justification}
        </div>
      )}
    </div>
  );
};

export default Quiz;
