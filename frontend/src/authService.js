import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider, TwitterAuthProvider } from 'firebase/auth';
import { firebaseConfig } from './firebaseConfig'; // Define your config here
import { initializeApp } from 'firebase/app';

// Initialize Firebase app
initializeApp(firebaseConfig);

const auth = getAuth();

export const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem('token', result.user.accessToken);
    window.location = '/';
  } catch (error) {
    console.error('Google Sign-In Error:', error);
  }
};

export const signInWithFacebook = async () => {
  const provider = new FacebookAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem('token', result.user.accessToken);
    window.location = '/';
  } catch (error) {
    console.error('Facebook Sign-In Error:', error);
  }
};

export const signInWithTwitter = async () => {
  const provider = new TwitterAuthProvider();
  try {
    const result = await signInWithPopup(auth, provider);
    localStorage.setItem('token', result.user.accessToken);
    window.location = '/';
  } catch (error) {
    console.error('Twitter Sign-In Error:', error);
  }
};
