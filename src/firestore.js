// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: 'AIzaSyB2-cBHD0L5FLtD7g-fWQ19KBJbTGwBpx8',
  authDomain: 'talkingcards-b056d.firebaseapp.com',
  projectId: 'talkingcards-b056d',
  storageBucket: 'talkingcards-b056d.appspot.com',
  messagingSenderId: '539559765848',
  appId: '1:539559765848:web:eb85531d871fce42ab672d',
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
