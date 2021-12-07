import React from 'react';
import styled from 'styled-components';

const NavigationWrapper = styled.nav`
  display: grid;
  grid-template-columns: 1fr 0.1fr;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrey};
  div {
    display: flex;
    align-items: center;
  }
`;

const Title = styled.h1`
  margin: 0;
  white-space: nowrap;
`;

const Link = styled.a`
  color: ${({ theme }) => theme.colors.grey};
  text-decoration: none;
  font-size: 16px;
  padding: 5px 15px 0 15px;
  white-space: nowrap;

  &:first-of-type {
    padding-left: 30px;
  }

  &:last-of-type {
    justify-self: end;
  }
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <div>
        <Title>Talking cards</Title>
        <Link href="/">Card list</Link>
        <Link href="/">Create card</Link>
        <Link href="/">FAQ</Link>
        <Link href="/">Help</Link>
      </div>
      <Link href="/">Login/Register</Link>
    </NavigationWrapper>
  );
};

export default Navigation;
