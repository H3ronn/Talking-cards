import React, { useState, createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ErrorContext = createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState('');
  const [timerId, setTimerId] = useState(0);

  const { pathname } = useLocation();

  const dispatchError = (message) => {
    instantErrorHide();
    if (!error) {
      setTimerId(delayedResetError());
    }
    setError(message);
  };

  const delayedResetError = () => {
    return setTimeout(() => {
      setError('');
    }, 5500);
  };

  const instantErrorHide = () => {
    clearTimeout(timerId);
    setError('');
  };

  useEffect(() => {
    instantErrorHide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <ErrorContext.Provider value={{ error, dispatchError, instantErrorHide }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  return errorContext;
};
