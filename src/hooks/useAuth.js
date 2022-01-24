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
      // console.log(user?.uid);
      setUserId(user?.uid);
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
    await signOut(auth);
    console.log('User logout');
  };

  return { userId, signUp, signIn, logout };
};

export default useAuth;
