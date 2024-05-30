import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAjeyeFmjd3xuR23wU-ykBpV80BeRPYl60",
  authDomain: "istqb-quiz-app.firebaseapp.com",
  projectId: "istqb-quiz-app",
  storageBucket: "istqb-quiz-app.appspot.com",
  messagingSenderId: "314572130263",
  appId: "1:314572130263:web:5e6c4fb64a195314b0ad92",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const saveQuizResult = async (correctAnswers, incorrectAnswers) => {
  try {
    const docRef = await addDoc(collection(db, "quizResults"), {
      correctAnswers,
      incorrectAnswers,
      timestamp: new Date()
    });
    console.log("Quiz result written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding quiz result: ", e);
  }
};

export { auth, db, saveQuizResult };