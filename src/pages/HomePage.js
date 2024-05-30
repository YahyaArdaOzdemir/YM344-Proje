import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import LogoImage from '../images/Dogus_Logo.png';
import { auth, db } from '../firebase';
import { onAuthStateChanged, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { collection, query, where, getDocs } from 'firebase/firestore';
import './HomePage.css';

const HomePage = () => {
  const [user, setUser] = useState(null);
  const [quizResults, setQuizResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        fetchQuizResults(currentUser.uid);
      } else {
        setQuizResults([]);
      }
    });

    return () => unsubscribe();
  }, []);

  const fetchQuizResults = async (userId) => {
    const q = query(collection(db, 'quizResults'), where('userId', '==', userId));
    const querySnapshot = await getDocs(q);
    const results = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
    setQuizResults(results);
  };

  const handleSignOut = () => {
    signOut(auth).then(() => {
      setUser(null);
      setQuizResults([]);
    });
  };

  const navigateToQuiz = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };

  return (
    <div className="home-container">
      <div className="login-container">
        {user ? (
          <div className="auth-box">
            <button onClick={handleSignOut}>Sign out</button>
            <button onClick={() => navigate('/random-quiz')}>Randomized Quiz</button>
            <div>
              <h3>Your Quiz Results</h3>
              {quizResults.length === 0 ? (
                <p>No quiz results found.</p>
              ) : (
                <ul>
                  {quizResults.map((result, index) => (
                    <li key={index}>
                      <p>Correct: {result.correctAnswers}, Incorrect: {result.incorrectAnswers}</p>
                      <p>Date: {new Date(result.timestamp.seconds * 1000).toLocaleDateString()}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ) : (
          <div className="auth-box">
            <p className="red-text">Login for a randomized quiz!</p>
            <Login />
            <p className="red-text signup-link" onClick={() => navigate('/register')}>Don't have an account? Sign up!</p>
          </div>
        )}
      </div>
      <img src={LogoImage} alt="Logo" className="logo" />
      <h1 className="home-text">ISTQB Quiz App</h1>
      <Button text="ISTQB CTFL v4.0 Sample Exam A Questions v1.5" onClick={() => navigateToQuiz(1)} />
      <Button text="ISTQB CTFL v4.0 Sample Exam B Questions v1.4" onClick={() => navigateToQuiz(2)} />
      <Button text="ISTQB CTFL v4.0 Sample Exam C Questions v1.3" onClick={() => navigateToQuiz(3)} />
      <Button text="ISTQB CTFL v4.0 Sample Exam D Questions v1.3" onClick={() => navigateToQuiz(4)} />
    </div>
  );
};

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  return (
    <div className="login-box">
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default HomePage;
