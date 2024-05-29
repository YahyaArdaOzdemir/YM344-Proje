import { auth } from './firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';

const registerBtn = document.getElementById('register-btn');
const loginBtn = document.getElementById('login-btn');
const randomQuizBtn = document.getElementById('random-quiz-btn');

if (registerBtn) {
  registerBtn.addEventListener('click', () => {
    const email = document.getElementById('register-email').value;
    const password = document.getElementById('register-password').value;

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User registered:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  });
}

if (loginBtn) {
  loginBtn.addEventListener('click', () => {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log('User logged in:', userCredential.user);
      })
      .catch((error) => {
        console.error('Error logging in user:', error);
      });
  });
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log('User is logged in:', user);
    if (randomQuizBtn) randomQuizBtn.style.display = 'block';
  } else {
    console.log('No user is logged in');
    if (randomQuizBtn) randomQuizBtn.style.display = 'none';
  }
});
