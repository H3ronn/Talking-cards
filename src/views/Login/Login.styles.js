import styled from 'styled-components';
import Button from 'components/atoms/Button/Button';
import { Link } from 'react-router-dom';
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
    &:first-child {
      display: none;
      @media (max-width: 800px) {
        display: block;
      }
    }
    margin: 0;
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
  color: #b1b1b1;
  font-size: 0.9rem;
  text-decoration: none;
  font-weight: 500;
  &:hover {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const StyledButton = styled(Button)``;
