import React from 'react';
import styled, { css } from 'styled-components';

const Line = styled.div`
  width: 20px;
  height: 3px;
  background-color: black;
  border-radius: 10px;
  transform-origin: left;
  &:nth-child(2) {
    width: 15px;
    margin: 4px 0;
  }
`;

const Wrapper = styled.button`
  border: none;
  background-color: ${({ isOpen }) => (isOpen ? 'transparent' : 'white')};
  border-radius: 2px;
  padding: 5px;
  width: 30px;
  height: 30px;
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.mobileNavigationButton};

  @media (min-width: 750px) {
    display: none;
  }

  ${Line} {
    transition: ${({ isOpen }) =>
      isOpen
        ? `transform 0.3s 0.3s ease-in-out, opacity 0.3s  ease-in-out`
        : `transform 0.3s ease-in-out, opacity 0.3s 0.3s ease-in-out`};
    ${({ isOpen }) =>
      isOpen
        ? css`
            &:nth-child(1) {
              transform: rotate(45deg);
            }
            &:nth-child(2) {
              opacity: 0;
            }
            &:nth-child(3) {
              transform: rotate(-45deg);
            }
          }
        `
        : null};
  }
`;

const MenuButton = ({ isOpen, onClick, ...props }) => {
  return (
    <Wrapper isOpen={isOpen} onClick={onClick} {...props}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Wrapper>
  );
};

export default MenuButton;
