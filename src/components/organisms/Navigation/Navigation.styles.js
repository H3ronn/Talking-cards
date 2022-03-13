import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import { NavLink } from 'react-router-dom';

export const LinksWrapper = styled.div``;

export const NavigationWrapper = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
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

export const StyledTitle = styled(Title)`
  margin: 0;
`;

// moved to other function because its bugging my colors in vsc
const linkAttrs = ({ theme }) => ({
  style: ({ isActive }) => ({
    color: isActive ? theme.colors.blue : 'black',
  }),
});
export const Link = styled(NavLink).attrs(linkAttrs)`
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  padding: 5px 15px 0 15px;
  white-space: nowrap;

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
  @media (max-width: 750px) {
    max-width: 100px;
  }
`;
