import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import QuizPage from './pages/QuizPage';
import Register from './pages/Register';
import RegisterPage from './pages/RegisterPage';
import RandomQuiz from './pages/RandomQuiz';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/quiz/:quizId" element={<QuizPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/register-page" element={<RegisterPage />} />
        <Route path="/random-quiz" element={<RandomQuiz />} />
      </Routes>
    </Router>
  );
};

export default App;
