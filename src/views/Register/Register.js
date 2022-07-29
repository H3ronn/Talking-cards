import React, { useState } from 'react';
import { useError } from 'hooks/useError';
import { auth } from 'firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { RegisterForm, StyledLink } from './Register.styles';
import { FormButtons, Wrapper, Heading } from 'views/Login/Login.styles';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import { formatErrorMessage } from 'helpers/formatErrorMessage';
import EmailField from 'components/molecules/EmailField/EmailField';
import PasswordField from 'components/molecules/PasswordField/PasswordField';
import { useTranslation } from 'react-i18next';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatchError, instantErrorHide } = useError();

  const { t } = useTranslation();

  const signUp = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      instantErrorHide();
    } catch (e) {
      const formattedError = formatErrorMessage(e.code);
      dispatchError(formattedError);
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    signUp(email, password);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Wrapper>
      <Heading>
        <Title blue>Talking Cards</Title>
        <Title as="h2">{t('Create account')}</Title>
        <p>{t('We want to help you communicate!')}</p>
        <small>{t('You can use: email: test@test.pl password: testtest')}</small>
      </Heading>
      <RegisterForm onSubmit={handleSignUp}>
        <EmailField onChange={handleEmailChange} value={email} required />
        <PasswordField onChange={handlePasswordChange} value={password} required />
        <FormButtons>
          <StyledLink to="/login">{t('You already have account?')}</StyledLink>
          <Button>Sign&nbsp;up</Button>
        </FormButtons>
      </RegisterForm>
    </Wrapper>
  );
};

export default Register;
