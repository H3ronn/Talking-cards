import React, { useState, createContext, useContext } from 'react';

const ErrorContext = createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState('');

  const dispatchError = (message) => {
    console.log('dispatch');
    if (!error) {
      setTimeout(() => {
        setError('');
      }, 5500);
    }
    setError(message);
  };

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  return errorContext;
};
