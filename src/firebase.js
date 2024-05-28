// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjeyeFmjd3xuR23wU-ykBpV80BeRPYl60",
  authDomain: "istqb-quiz-app.firebaseapp.com",
  projectId: "istqb-quiz-app",
  storageBucket: "istqb-quiz-app.appspot.com",
  messagingSenderId: "314572130263",
  appId: "1:314572130263:web:5e6c4fb64a195314b0ad92",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
