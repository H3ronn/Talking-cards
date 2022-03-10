import { useState, createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

//types: success warning error info
export const AlertContext = createContext({});

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({});
  const [timerId, setTimerId] = useState(0);

  const { pathname } = useLocation();

  const dispatchAlert = (message, type) => {
    hideAlert();
    setAlert({ message, type });
    clearTimeout(timerId);
    setTimerId(delayedHideAlert());
  };

  const delayedHideAlert = () => {
    return setTimeout(() => {
      hideAlert();
    }, 2500);
  };

  const hideAlert = () => {
    setAlert(null);
  };

  useEffect(() => {
    hideAlert();
  }, [pathname]);

  return <AlertContext.Provider value={{ alert, dispatchAlert }}>{children}</AlertContext.Provider>;
};

export const useAlert = () => {
  const alertContext = useContext(AlertContext);

  return alertContext;
};
