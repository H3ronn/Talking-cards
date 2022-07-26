import React, { useState } from 'react';
import InputField from 'components/molecules/InputField/InputField';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'firestore';
import { formatErrorMessage } from 'helpers/formatErrorMessage';
import { useError } from 'hooks/useError';
import Presentation from 'components/organisms/Presentation/Presentation';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  margin: 50px;
  background-color: white;
  border-radius: 30px;
`;

export const FormWrapper = styled.div`
  /* justify-self: center; */
  /* align-content: center; */
  width: 100%;
`;

export const LoginForm = styled.form`
  max-width: 30vw;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  input {
    width: 100%;
  }
  div {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.grey};
  font-size: 1.1rem;
  margin-top: 8px;
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
      <FormWrapper>
        <span>
          You can use: <br />
          email: test@test.pl
          <br />
          password: testtest
        </span>
        <LoginForm onSubmit={handleLogin}>
          <InputField
            type="email"
            label="E-mail"
            name="email"
            id="email"
            onChange={handleEmailChange}
            value={email}
            required
          />
          <InputField
            type="password"
            label="Password"
            name="password"
            id="password"
            onChange={handlePasswordChange}
            value={password}
            required
          />
          <StyledButton>Login</StyledButton>
        </LoginForm>
        <StyledLink to="/register">Don't have account?</StyledLink>
      </FormWrapper>
      <Presentation />
    </Wrapper>
  );
};

export default Login;
