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

export const RegisterForm = styled.form`
  max-width: 30vw;
  min-width: 300px;
  margin: 0 auto;
`;

export const StyledButton = styled(Button)`
  margin-top: 10px;
`;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Wrapper>
      <Title>Register to Talking Card</Title>
      <RegisterForm>
        <InputField type="text" label="Login" name="login" id="login" onChange={handleEmailChange} value={email} />
        <InputField
          type="password"
          label="Password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
          value={password}
        />
      </RegisterForm>
      <StyledButton>Register</StyledButton>
      <Link to="/login">You already have account?</Link>
    </Wrapper>
  );
};

export default Register;
