import React, { useEffect, useState } from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

const Root = () => {
  const [isLogged, setLogged] = useState(false);
  const auth = getAuth();

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (user) => {
      setLogged(user);
    });
  }, []);

  return isLogged ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
