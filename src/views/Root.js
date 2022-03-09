import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import SuccessAlert from 'components/molecules/SuccessAlert/SuccessAlert';
import { useAuth } from 'hooks/useAuth';
import { useError } from 'hooks/useError';
import React, { useEffect } from 'react';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import { useAlert } from 'hooks/useAlert';

const Root = () => {
  const { userId } = useAuth();
  const { error } = useError();
  const { alert } = useAlert();

  return (
    <>
      {alert ? <SuccessAlert message={alert} /> : null}
      {error ? <ErrorMessage message={error} /> : null}
      {userId ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
