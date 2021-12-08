import React, { useState } from 'react';
import styled, { css } from 'styled-components';

const Line = styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  margin-bottom: 4px;
  border-radius: 10px;
  transform-origin: left;
  &:nth-child(2) {
    width: 15px;
  }
`;

const Wrapper = styled.button`
  border: none;
  background-color: transparent;
  padding: 0;
  width: 20px;
  height: 20px;

  ${Line} {
    transition: ${({ isOpen }) =>
      isOpen ? `transform 0.3s 0.3s ease-in-out, opacity 0.3s  ease-in-out` : `transform 0.3s ease-in-out, opacity 0.3s 0.3s ease-in-out`};
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

const MenuButton = ({ isOpen, onClick }) => {
  return (
    <Wrapper isOpen={isOpen} onClick={onClick}>
      <Line></Line>
      <Line></Line>
      <Line></Line>
    </Wrapper>
  );
};

export default MenuButton;
