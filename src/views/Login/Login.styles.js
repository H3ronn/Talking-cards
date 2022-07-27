import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Title from 'components/atoms/Title/Title';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 800px) {
    h2 {
      font-size: 1.2rem;
    }
  }
`;

export const Heading = styled.header`
  padding: 10px 0;

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
