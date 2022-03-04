import React, { useState, createContext, useContext } from 'react';

const ErrorContext = createContext({});

export const ErrorProvider = ({ children }) => {
  const [error, setError] = useState('eee');

  const dispatchError = (message) => setError(message);

  return <ErrorContext.Provider value={{ error, dispatchError }}>{children}</ErrorContext.Provider>;
};

export const useError = () => {
  const errorContext = useContext(ErrorContext);

  return errorContext;
};