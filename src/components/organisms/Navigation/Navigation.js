import React, { useState } from 'react';
import { NavigationWrapper, LinksWrapper, StyledTitle, Link, LogoutButton } from './Navigation.styles';
import MenuButton from 'components/atoms/MenuButton/MenuButton';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import { useAuth } from 'hooks/useAuth';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  const handleOpenMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const hideMobileMenu = () => {
    setIsOpen(false);
  };

  return (
    <NavigationWrapper>
      <MenuButton onClick={handleOpenMenu} isOpen={isOpen} />
      <LinksWrapper>
        <StyledTitle>Talking cards</StyledTitle>
        <Link to="/list">Card list</Link>
        <Link to="/create">Create card</Link>
        <Link to="/faq">FAQ</Link>
      </LinksWrapper>
      <LogoutButton onClick={logout}>Log&nbsp;out</LogoutButton>
      <MobileNavigation isOpen={isOpen} hideMenu={hideMobileMenu} />
    </NavigationWrapper>
  );
};

export default Navigation;
