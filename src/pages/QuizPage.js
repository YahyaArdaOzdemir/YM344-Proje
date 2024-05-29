import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import quizData from '../data/quizData';
import './QuizPage.css';

const QuizPage = () => {
  const { quizId } = useParams();
  const quiz = quizData.find(q => q.id === parseInt(quizId));
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const handleOptionClick = (index) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [currentQuestionIndex]: index
    });
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
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

  const handleFinishQuiz = () => {
    setShowResults(true);
  };

  const getAnswerClass = (index) => {
    if (selectedAnswers[currentQuestionIndex] !== undefined) {
      if (index === quiz.questions[currentQuestionIndex].correctAnswer) {
        return 'correct selected';
      } else if (index === selectedAnswers[currentQuestionIndex]) {
        return 'incorrect selected';
      }
    }
    return '';
  };

  const correctAnswersCount = Object.keys(selectedAnswers).filter(
    key => selectedAnswers[key] === quiz.questions[key].correctAnswer
  ).length;

  if (showResults) {
    return (
      <div className="quiz-container">
        <div className="results-container">
          <h2>Quiz Results</h2>
          <p>Correct Answers: {correctAnswersCount}</p>
          <p>Incorrect Answers: {quiz.questions.length - correctAnswersCount}</p>
          <button onClick={() => navigate('/')}>Return to homepage</button>
        </div>
      </div>
    );
  }

  const currentQuestion = quiz.questions[currentQuestionIndex];
  const imagePath = currentQuestion.image ? require(`../${currentQuestion.image}`).default : null;

  return (
    <div className="quiz-container">
      <div className="question-navigation">
        <h2>Questions</h2>
        <button className="button" onClick={() => navigate('/')}>Return to homepage</button>
        <button className="button" onClick={handleFinishQuiz}>Finish quiz</button>
        <div className="question-list">
          {quiz.questions.map((question, index) => (
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
          <p>{currentQuestion.text}</p>
          {imagePath && <img src={imagePath} alt="Question" />}
          <div className="options">
            {currentQuestion.options.map((option, index) => (
              <button
                key={index}
                className={`option ${getAnswerClass(index)}`}
                onClick={() => handleOptionClick(index)}
                disabled={selectedAnswers[currentQuestionIndex] !== undefined}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswers[currentQuestionIndex] !== undefined && (
            <div className="justification">
              <p className={currentQuestion.correctAnswer === selectedAnswers[currentQuestionIndex] ? 'correct' : 'incorrect'}>
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>
        <div className="nav-buttons">
          <button onClick={handlePreviousQuestion} disabled={currentQuestionIndex === 0}>Previous Question</button>
          <button onClick={handleNextQuestion}>{currentQuestionIndex < quiz.questions.length - 1 ? 'Next Question' : 'Finish Quiz'}</button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
