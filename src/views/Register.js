import React, { useState } from 'react';
import InputField from 'components/molecules/InputField/InputField';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import { Button } from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const Wrapper = styled.div`
  /* text-align: center; */
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const RegisterForm = styled.form`
  max-width: 30vw;
  min-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
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

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const auth = getAuth();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      console.log(cred);
    } catch (e) {
      console.log(e.code);
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <Wrapper>
      <Title>Register to Talking Card</Title>
      <RegisterForm onSubmit={handleSignUp}>
        <InputField type="text" label="E-mail" name="email" id="email" onChange={handleEmailChange} value={email} />
        <InputField
          type="password"
          label="Password"
          name="password"
          id="password"
          onChange={handlePasswordChange}
          value={password}
        />
        <StyledButton>Register</StyledButton>
      </RegisterForm>
      <StyledLink to="/login">You already have account?</StyledLink>
    </Wrapper>
  );
};

export default Register;
