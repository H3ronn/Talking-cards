import React from 'react';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import { useAlert } from 'hooks/useAlert';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import Alert from 'components/molecules/Alert/Alert';

const Root = () => {
  const { userId } = useAuth();
  const { error } = useError();
  const { alert } = useAlert();

  return (
    <>
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      {error ? <ErrorMessage message={error} /> : null}
      {userId ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
