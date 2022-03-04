import { useState, useEffect, createContext, useContext } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from 'firestore';

export const AuthContext = createContext({ userId: null, signUp: () => {}, signIn: () => {}, logout: () => {} });

export const AuthProvider = ({ children }) => {
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

  return <AuthContext.Provider value={{ userId, signUp, signIn, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
