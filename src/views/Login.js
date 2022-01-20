import React, { useState } from 'react';
import InputField from 'components/molecules/InputField/InputField';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import InputButton from 'components/atoms/InputButton/InputButton';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoginForm = styled.form`
  max-width: 30vw;
  min-width: 300px;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const Login = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginChange = (e) => {
    setLogin(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Wrapper>
      <Title>Login to Talking Card</Title>
      <LoginForm>
        <InputField type="text" label="Login" name="login" id="login" onChange={handleLoginChange} value={login} />
        <InputField
          type="password"
          label="Password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </LoginForm>
      <StyledButton>Login</StyledButton>
      <Link to="/register">Don't have account?</Link>
    </Wrapper>
  );
};

export default Login;
