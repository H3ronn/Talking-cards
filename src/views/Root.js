import useAuth from 'hooks/useAuth';
import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const Root = () => {
  const { userId } = useAuth();

  return userId ? <AuthenticatedApp /> : <UnauthenticatedApp />;
};

export default Root;
