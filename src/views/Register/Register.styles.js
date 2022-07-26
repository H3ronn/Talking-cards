import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
