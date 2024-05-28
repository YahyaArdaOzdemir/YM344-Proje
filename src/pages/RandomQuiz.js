import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import randomQuizData from '../randomQuizData';
import './QuizPage.css'; // Reuse the QuizPage.css for consistent styling

const RandomQuiz = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [incorrectAnswers, setIncorrectAnswers] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const randomQuestions = randomQuizData.sort(() => 0.5 - Math.random()).slice(0, 20);
    setQuestions(randomQuestions);
  }, []);

  const handleAnswer = (isCorrect, index) => {
    if (isCorrect) {
      setCorrectAnswers(correctAnswers + 1);
    } else {
      setIncorrectAnswers(incorrectAnswers + 1);
    }

    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: index
    });

    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      setShowResults(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleQuestionSelect = (index) => {
    setCurrentQuestionIndex(index);
  };

  const getAnswerClass = (index) => {
    if (selectedAnswers[currentQuestionIndex] !== undefined) {
      if (questions[currentQuestionIndex].answers[index].isCorrect) {
        return 'correct selected';
      } else if (index === selectedAnswers[currentQuestionIndex]) {
        return 'incorrect selected';
      }
    }
    return '';
  };

  const currentQuestion = questions[currentQuestionIndex];

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="results-container">
          <h2>Quiz Results</h2>
          <p>Correct Answers: {correctAnswers}</p>
          <p>Incorrect Answers: {incorrectAnswers}</p>
          <button onClick={() => navigate('/')}>Return to homepage</button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="quiz-container">
      <div className="question-navigation">
        <h2>Questions</h2>
        <button className="button" onClick={() => navigate('/')}>Return to homepage</button>
        <div className="question-list">
          {questions.map((question, index) => (
            <div
              key={index}
              className={`question-item ${currentQuestionIndex === index ? 'active' : ''}`}
              onClick={() => handleQuestionSelect(index)}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      <div className="main-content">
        <div className="question-block">
          <h3>Question {currentQuestionIndex + 1}</h3>
          <p>{currentQuestion.question}</p>
          <div className="options">
            {currentQuestion.answers.map((answer, index) => (
              <button
                key={index}
                className={`option ${getAnswerClass(index)}`}
                onClick={() => handleAnswer(answer.isCorrect, index)}
                disabled={selectedAnswers[currentQuestionIndex] !== undefined}
              >
                {answer.text}
              </button>
            ))}
          </div>
        </div>
        <div className="nav-buttons">
          <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous Question</button>
          <button onClick={() => setCurrentQuestionIndex(currentQuestionIndex + 1)} disabled={currentQuestionIndex >= questions.length - 1}>Next Question</button>
        </div>
      </div>
    </div>
  );
};

export default RandomQuiz;
