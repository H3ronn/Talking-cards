import Title from 'components/atoms/Title/Title';
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Wrapper = styled.nav`
  z-index: ${({ theme }) => theme.zIndex.mobileNavigation};
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.9);
  border-right: 1px solid ${({ theme }) => theme.colors.lightGrey};
  height: 100vh;
  padding: 50px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};

  ${Title} {
    font-size: 30px;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  a {
    display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
    font-size: 20px;
    color: #111827;
    font-weight: bold;
    margin: 30px 0;
  }
`;

// moved to other function because its bugging my colors in vsc
const navLinkAttrs = ({ theme }) => ({
  style: ({ isActive }) => ({
    color: isActive ? theme.colors.blue : 'black',
  }),
});
const StyledNavLink = styled(NavLink).attrs(navLinkAttrs)`
  text-decoration: none;
`;

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
