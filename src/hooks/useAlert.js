import { useState, createContext, useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const AlertContext = createContext({});

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState('');
  const [timerId, setTimerId] = useState(0);

  const { pathname } = useLocation();

  const dispatchAlert = (message) => {
    instantAlertHide();
    if (!alert) {
      setTimerId(delayedResetError());
    }
    setAlert(message);
  };

  const delayedResetError = () => {
    return setTimeout(() => {
      setAlert('');
    }, 2500);
  };

  const instantAlertHide = () => {
    setAlert('');
    clearTimeout(timerId);
  };

  useEffect(() => {
    instantAlertHide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return <AlertContext.Provider value={{ alert, dispatchAlert }}>{children}</AlertContext.Provider>;
};

export const useAlert = () => {
  const alertContext = useContext(AlertContext);

  return alertContext;
};
