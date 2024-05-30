import React, { useState, useEffect } from 'react';
import { db } from './firebase';
import { collection, query, where, orderBy, getDocs } from 'firebase/firestore';
import { auth } from './firebase';

const LoadQuizResults = () => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const fetchResults = async () => {
      const user = auth.currentUser;
      if (user) {
        const q = query(
          collection(db, 'quizResults'),
          where('userId', '==', user.uid),
          orderBy('timestamp', 'desc')
        );

        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setResults(data);
      }
    };

    fetchResults();
  }, []);

  return (
    <div id="quiz-results">
      {results.length === 0 ? (
        <p>No quiz results found.</p>
    ) : (
      <ul>
        {results.map(result => (
          <li key={result.id}>
            <p>Correct Answers: {result.correctAnswers}</p>
            <p>Incorrect Answers: {result.incorrectAnswers}</p>
            <p>Date: {new Date(result.timestamp.seconds * 1000).toLocaleDateString()}</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);
};

export default LoadQuizResults;
