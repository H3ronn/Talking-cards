import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firestore';
import { useError } from 'hooks/useError';
import { Wrapper, FormButtons, Heading, LoginForm, StyledButton, StyledLink } from './Login.styles';
import Title from 'components/atoms/Title/Title';
import { formatErrorMessage } from 'helpers/formatErrorMessage';
import PasswordField from 'components/molecules/PasswordField/PasswordField';
import EmailField from 'components/molecules/EmailField/EmailField';
import Button from 'components/atoms/Button/Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatchError, instantErrorHide } = useError();

  const signIn = async (email, password) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      instantErrorHide();
    } catch (e) {
      const formattedError = formatErrorMessage(e.code);
      dispatchError(formattedError);
    }
  };

  const handleLogin = (e) => {
    e.preventDefault();
    signIn(email, password);
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
        <Title as="h2">Login</Title>
        <p>We want to help you communicate!</p>
        <small>You can use: email: test@test.pl password: testtest</small>
      </Heading>
      <LoginForm onSubmit={handleLogin}>
        <EmailField onChange={handleEmailChange} value={email} required />
        <PasswordField onChange={handlePasswordChange} value={password} required />
        <FormButtons>
          <StyledLink to="/register">Register</StyledLink>
          <Button>Sign In</Button>
        </FormButtons>
      </LoginForm>
    </Wrapper>
  );
};

export default Login;
