import { useState, useEffect } from 'react';
import {
  onAuthStateChanged,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth';

const auth = getAuth();

const useAuth = () => {
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setUserId(null);
      if (user) {
        setUserId(user.uid);
      }

      // Belowe code snippets throw warnings in tests
      // if (user.uid) {
      //   setUserId(user.uid);
      // } else {
      //   setUserId(null);
      // }
      // setUserId(user?.uid);
    });
    return () => unsubAuth();
  }, []);

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      // console.log(cred);
    } catch (e) {
      console.log(e.code);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      // console.log(cred);
    } catch (error) {
      console.log(error.code);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      console.log('User logout');
    } catch (error) {
      console.log(error);
    }
  };

  return { userId, signUp, signIn, logout };
};

export default useAuth;
