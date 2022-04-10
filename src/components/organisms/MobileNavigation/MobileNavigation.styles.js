import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import Title from 'components/atoms/Title/Title';

export const Wrapper = styled.nav`
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

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;

  &.active {
    color: ${({ theme }) => theme.colors.blue};
  }
`;
