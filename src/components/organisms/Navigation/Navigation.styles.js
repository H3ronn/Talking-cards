import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import { NavLink } from 'react-router-dom';
import LanguageSwitch from 'components/molecules/LanguageSwitch/LanguageSwitch';

export const LinksWrapper = styled.div``;

export const NavigationWrapper = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.1fr 0.1fr;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  box-shadow: -2px 4px 10px rgba(155, 124, 142, 0.09);

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    justify-items: center;
  }
  ${LinksWrapper} {
    @media (max-width: 750px) {
      display: none;
    }
    display: flex;
    align-items: center;
  }
`;

export const StyledLanguageSwitch = styled(LanguageSwitch)`
  @media (max-width: 750px) {
    display: none;
  }
`;

export const StyledTitle = styled(Title)`
  margin: 0;
`;

export const Link = styled(NavLink)`
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 15px 0 15px;
  white-space: nowrap;
  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }

  &:first-of-type {
    padding-left: 30px;
  }

  &:last-of-type {
    @media (max-width: 750px) {
      justify-self: center;
    }
    justify-self: end;
  }
`;

export const LogoutButton = styled.button`
  color: ${({ theme }) => theme.colors.grey};
  border: none;
  background: none;
  font-size: 1rem;
  cursor: pointer;
  width: max-content;
  margin: 0 10px;
  @media (max-width: 750px) {
    max-width: 100px;
  }
`;
