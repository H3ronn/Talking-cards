import React, { useState } from 'react';
import { NavigationWrapper, LinksWrapper, StyledTitle, Link, LogoutButton } from './Navigation.styles';
import MenuButton from 'components/atoms/MenuButton/MenuButton';
import MobileNavigation from '../MobileNavigation/MobileNavigation';
import { useError } from 'hooks/useError';
import { signOut } from 'firebase/auth';
import { auth } from 'firestore';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dispatchError, instantErrorHide } = useError();

  const logout = async () => {
    try {
      await signOut(auth);
      instantErrorHide();
    } catch (error) {
      dispatchError('Logout failed. Try again or report the problem to us.');
    }
  };

  const handleLogout = () => {
    logout();
  };

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
      <LogoutButton onClick={handleLogout}>Log&nbsp;out</LogoutButton>
      <MobileNavigation isOpen={isOpen} hideMenu={hideMobileMenu} />
    </NavigationWrapper>
  );
};

export default Navigation;
