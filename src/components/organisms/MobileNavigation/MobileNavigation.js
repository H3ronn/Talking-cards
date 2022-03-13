import Title from 'components/atoms/Title/Title';
import React from 'react';
import { Wrapper, StyledNavLink } from './MobileNavigation.styles';

const MobileNavigation = ({ isOpen = false, hideMenu }) => {
  const handleCloseMenu = (e) => {
    const isLink = e.target.href;
    if (isLink) {
      hideMenu();
    }
  };

  return (
    <Wrapper isOpen={isOpen} onClick={handleCloseMenu}>
      <Title>Talking cards</Title>
      <ul>
        <li>
          <StyledNavLink to="/list">Card list</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/create">Create card</StyledNavLink>
        </li>
        <li></li>
        <li>
          <StyledNavLink to="/faq">FAQ</StyledNavLink>
        </li>
        <li></li>
      </ul>
    </Wrapper>
  );
};

export default MobileNavigation;
