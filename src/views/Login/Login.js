import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firestore';
import { useError } from 'hooks/useError';
import { Wrapper, FormWrapper, FormButtons, Heading, LoginForm, StyledButton, StyledLink } from './Login.styles';
import InputField from 'components/molecules/InputField/InputField';
import Presentation from 'components/organisms/Presentation/Presentation';
import Title from 'components/atoms/Title/Title';
import { formatErrorMessage } from 'helpers/formatErrorMessage';
import userIcon from './userIcon.svg';
import passwordIcon from './passwordIcon.svg';

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
      <FormWrapper>
        <Heading>
          <Title blue>Talking Cards</Title>
          <p>We want to help you communicate!</p>
          <small>You can use: email: test@test.pl password: testtest</small>
        </Heading>
        <LoginForm onSubmit={handleLogin}>
          <InputField
            type="email"
            label="E-mail"
            name="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
            required
            placeholder="Your e-mail"
            icon={userIcon}
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            id="password"
            onChange={handlePasswordChange}
            value={password}
            required
            placeholder="Password"
            icon={passwordIcon}
          />
          <FormButtons>
            <StyledLink to="/register">Register</StyledLink>
            <StyledButton>Sign In</StyledButton>
          </FormButtons>
        </LoginForm>
      </FormWrapper>
      <Presentation />
    </Wrapper>
  );
};

export default Login;
