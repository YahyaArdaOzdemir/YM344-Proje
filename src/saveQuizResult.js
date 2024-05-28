import { db } from './firebase';
import { collection, addDoc } from 'firebase/firestore';
import { auth } from './firebase';

export const saveQuizResult = async (correctAnswers, incorrectAnswers) => {
  const user = auth.currentUser;
  if (user) {
    try {
      await addDoc(collection(db, 'quizResults'), {
        userId: user.uid,
        correctAnswers: correctAnswers,
        incorrectAnswers: incorrectAnswers,
        timestamp: new Date()
      });
    } catch (error) {
      console.error("Error saving quiz result: ", error);
    }
  }
};
