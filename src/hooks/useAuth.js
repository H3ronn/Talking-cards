import { useState, useEffect, createContext, useContext } from 'react';
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from 'firestore';
import { useError } from './useError';
import { formatErrorMessage } from 'helpers/formatErrorMessage';

export const AuthContext = createContext({ userId: null, signUp: () => {}, signIn: () => {}, logout: () => {} });

export const AuthProvider = ({ children }) => {
  const [userId, setUserId] = useState(null);
  const { dispatchError, instantErrorHide } = useError();

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
      instantErrorHide();
    } catch (e) {
      const formattedError = formatErrorMessage(e.code);
      dispatchError(formattedError);
    }
  };

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      instantErrorHide();
    } catch (e) {
      const formattedError = formatErrorMessage(e.code);
      dispatchError(formattedError);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      instantErrorHide();
    } catch (error) {
      dispatchError('Logout failed. Try again or report the problem to us.');
    }
  };

  return <AuthContext.Provider value={{ userId, signUp, signIn, logout }}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  return authContext;
};
