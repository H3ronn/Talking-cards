import React, { useEffect } from 'react';
import { useError } from 'hooks/useError';
import { useAlert } from 'hooks/useAlert';
import Alert from 'components/molecules/Alert/Alert';
import ErrorMessage from 'components/molecules/ErrorMessage/ErrorMessage';
import AuthenticatedApp from '../AuthenticatedApp/AuthenticatedApp';
import UnauthenticatedApp from '../UnauthenticatedApp/UnauthenticatedApp';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from 'store/user/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from 'firestore';
import { useLocation } from 'react-router-dom';
import { selectError } from 'store/errors/errorsSlice';
import { selectAlert } from 'store/alert/alertSlice';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const Root = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { instantErrorHide } = useError();
  const { hideAlert } = useAlert();
  const user = useSelector(selectUser);
  const { error } = useSelector(selectError);
  const { message, type } = useSelector(selectAlert);

  const { i18n } = useTranslation();
  useEffect(() => {
    if (error || message) {
      instantErrorHide();
      hideAlert();
    }
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
  console.log(i18n.language);
  return (
    <>
      <LangSwitcher>
        {Object.keys(lngs).map((lng) => (
          <button
            key={lng}
            onClick={() => {
              i18n.changeLanguage(lng);
            }}
            disabled={i18n.language === lng}
          >
            {lngs[lng].nativeName}
          </button>
        ))}
      </LangSwitcher>
      {message ? <Alert message={message} type={type} /> : null}
      {error ? <ErrorMessage message={error} /> : null}
      {user ? <AuthenticatedApp /> : <UnauthenticatedApp />}
    </>
  );
};

const lngs = {
  en: { nativeName: 'English' },
  pl: { nativeName: 'Polish' },
};

const LangSwitcher = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`;

export default Root;
