import React, { useState } from 'react';
import styled from 'styled-components';
import { useError } from 'hooks/useError';
import { auth } from 'firestore';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { FormButtons, Wrapper, Heading } from 'views/Login/Login.styles';
import Title from 'components/atoms/Title/Title';
import Button from 'components/atoms/Button/Button';
import { formatErrorMessage } from 'helpers/formatErrorMessage';
import EmailField from 'components/molecules/EmailField/EmailField';
import PasswordField from 'components/molecules/PasswordField/PasswordField';

export const RegisterForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const StyledLink = styled(Link)`
  color: #b1b1b1;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledButton = styled(Button)``;

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatchError, instantErrorHide } = useError();

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
        <Title as="h2">Create account</Title>
        <p>We want to help you communicate!</p>
        <small>You can use: email: test@test.pl password: testtest</small>
      </Heading>
      <RegisterForm onSubmit={handleSignUp}>
        <EmailField onChange={handleEmailChange} value={email} required />
        <PasswordField onChange={handlePasswordChange} value={password} required />
        <FormButtons>
          <StyledLink to="/login">You already have account?</StyledLink>
          <StyledButton>Sign&nbsp;up</StyledButton>
        </FormButtons>
      </RegisterForm>
    </Wrapper>
  );
};

export default Register;
