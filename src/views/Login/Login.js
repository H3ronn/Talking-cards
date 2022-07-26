import React, { useState } from 'react';
import InputField from 'components/molecules/InputField/InputField';
import styled from 'styled-components';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firestore';
import { formatErrorMessage } from 'helpers/formatErrorMessage';
import { useError } from 'hooks/useError';
import Presentation from 'components/organisms/Presentation/Presentation';
import userIcon from './userIcon.svg';
import passwordIcon from './passwordIcon.svg';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  justify-items: center;
  margin: 50px;
  background-color: white;
  border-radius: 30px;
  /* @media (max-width: 800px) {
    grid-template-columns: 1fr;
  } */
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    width: 100%;
  }
`;

export const FormButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledLink = styled(Link)`
  /* color: ${({ theme }) => theme.colors.grey}; */
  color: #b1b1b1;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
`;

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
      {/* <span>
          You can use: <br />
          email: test@test.pl
          <br />
          password: testtest
        </span> */}
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
      <Presentation />
    </Wrapper>
  );
};

export default Login;
