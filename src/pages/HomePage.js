import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import LogoImage from '../images/Dogus_Logo.png'; // Import the logo image
import './HomePage.css';

const HomePage = () => {
  const navigate = useNavigate();

  const navigateToQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="home-container">
      <img src={LogoImage} alt="Logo" className="logo" /> {/* Use the imported logo */}
      <h1 className="home-text">ISTQB Quiz App</h1>
      <Button text="ISTQB CTFL v4.0 Sample Exam A Questions v1.5" onClick={() => navigateToQuiz(1)} />
      <Button text="ISTQB CTFL v4.0 Sample Exam B Questions v1.4" onClick={() => navigateToQuiz(2)} />
      <Button text="ISTQB CTFL v4.0 Sample Exam C Questions v1.3" onClick={() => navigateToQuiz(3)} />
      <Button text="ISTQB CTFL v4.0 Sample Exam D Questions v1.3" onClick={() => navigateToQuiz(4)} />
    </div>
  );
};

export default HomePage;
