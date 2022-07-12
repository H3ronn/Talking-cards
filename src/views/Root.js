import React, { useEffect } from 'react';
import { useError } from 'hooks/useError';
import { useAlert } from 'hooks/useAlert';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import AuthenticatedApp from './AuthenticatedApp';
import UnauthenticatedApp from './UnauthenticatedApp';
import Alert from 'components/molecules/Alert/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from 'Redux/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firestore';

const Root = () => {
  const { error } = useError();
  const { alert } = useAlert();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    onAuthStateChanged(auth, (userDetails) => {
      if (userDetails) {
        dispatch(login(userDetails.toJSON()));
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <>
      {alert ? <Alert message={alert.message} type={alert.type} /> : null}
      {error ? <ErrorMessage message={error} /> : null}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

export default Root;
