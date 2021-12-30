import React, { useState } from 'react';
import styled from 'styled-components';
import MenuButton from 'components/atoms/MenuButton/MenuButton';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import Title from 'components/atoms/Title/Title';
import { NavLink } from 'react-router-dom';

const LinksWrapper = styled.div``;

const NavigationWrapper = styled.nav`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  box-shadow: -2px 4px 10px rgba(155, 124, 142, 0.09);

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
  }
  ${LinksWrapper} {
    @media (max-width: 750px) {
      display: none;
    }
    display: flex;
    align-items: center;
  }
`;

const Link = styled(NavLink).attrs({ style: ({ isActive }) => (isActive ? { textDecoration: 'underline' } : null) })`
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
  font-size: 16px;
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

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <NavigationWrapper>
      <MenuButton onClick={handleOpenMenu} isOpen={isOpen} />
      <LinksWrapper>
        <Title>Talking cards</Title>
        <Link to="/list">Card list</Link>
        <Link to="/create">Create card</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/help">Help</Link>
      </LinksWrapper>
      <Link to="/login">Login/Register</Link>
      <MobileNavigation isOpen={isOpen} />
    </NavigationWrapper>
  );
};

export default Navigation;
