import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import React from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';

const Root = () => {
  const { userId } = useAuth();
  const { error } = useError();

  return (
    <>
      {error ? <ErrorMessage message={error} /> : null}
      {userId ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
