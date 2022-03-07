import React, { useState } from 'react';
import InputField from 'components/molecules/InputField/InputField';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { useAuth } from 'hooks/useAuth';

export const Wrapper = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
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
  const [email, setEmail] = useState('test@test.pl');
  const [password, setPassword] = useState('testtest');
  const { signIn } = useAuth();

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
      <Title>Login to Talking Card</Title>
      <LoginForm onSubmit={handleLogin}>
        <InputField type="email" label="E-mail" name="email" id="email" onChange={handleEmailChange} value={email} />
        <InputField
          type="password"
          label="Password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <StyledButton>Login</StyledButton>
      </LoginForm>
      <StyledLink to="/register">Don't have account?</StyledLink>
    </Wrapper>
  );
};

export default Login;
