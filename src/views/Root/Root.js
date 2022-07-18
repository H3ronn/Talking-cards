import React, { useEffect } from 'react';
import { useError } from 'hooks/useError';
import { useAlert } from 'hooks/useAlert';
import Alert from 'components/molecules/Alert/Alert';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import AuthenticatedApp from '../AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from '../UnauthenticatedApp/UnauthenticatedApp';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from 'redux/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firestore';
import { useLocation } from 'react-router-dom';
import { selectError } from 'redux/errors/errorsSlice';

const Root = () => {
  const { instantErrorHide } = useError();
  const { alert } = useAlert();
  const { pathname } = useLocation();

  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const { error } = useSelector(selectError);
  console.log(error);

  useEffect(() => {
    console.log('hide');
    instantErrorHide();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    const unsubAuth = onAuthStateChanged(auth, (userDetails) => {
      if (userDetails) {
        dispatch(login(userDetails.toJSON()));
      } else {
        dispatch(logout());
      }
    });
    return () => unsubAuth();
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
