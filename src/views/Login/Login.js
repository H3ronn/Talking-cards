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
import Title from 'components/atoms/Title/Title';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  margin: 50px;
  background-color: white;
  border-radius: 30px;
  width: 100%;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    height: max-content;
    padding: 30px 0;
  }
`;

export const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Heading = styled.header`
  padding: 10px 20px;

  ${Title} {
    display: none;
    margin: 0;
    @media (max-width: 800px) {
      display: block;
    }
  }
  p {
    margin: 0;
  }
`;

export const LoginForm = styled.form`
  width: 100%;
  max-width: 400px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
`;

export const FormButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
`;

export const StyledLink = styled(Link)`
  /* color: ${({ theme }) => theme.colors.grey}; */
  color: #b1b1b1;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledButton = styled(Button)``;

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
