import { initializeApp } from 'firebase/app';
import { firebaseConfig } from 'firestore';
import useAuth from 'hooks/useAuth';
import AppProviders from 'providers/AppProviders';
import React, { useEffect } from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const Root = () => {
  const { userId } = useAuth();

  useEffect(() => {
    initializeApp(firebaseConfig);
  }, []);

  return <AppProviders>{userId ? <AuthenticatedApp /> : <UnauthenticatedApp />}</AppProviders>;
};

export default Root;
