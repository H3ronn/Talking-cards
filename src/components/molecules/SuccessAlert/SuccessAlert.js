import React from 'react';
import successIcon from './successIcon.svg';
import styled, { keyframes } from 'styled-components';

const slideIn = keyframes`
0% {
  transform: translate(-50%, 100%);
}
100% {
  transform: translate(-50%, 0);
}
`;

const slideOut = keyframes`
0% {
  transform: translate(-50%, 0);
}
100% {
  transform: translate(-50%, 100%);
}
`;

const Wrapper = styled.div`
  animation: ${slideIn} 0.4s ease-in-out forwards, ${slideOut} 0.4s 5s ease-in-out forwards;
  height: 50px;
  display: flex;
  position: fixed;
  top: 50px;
  left: 50%;
  transform: translateX(-50%);
  z-index: ${({ theme }) => theme.zIndex.successAlert};
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.green};
  padding: 10px 20px;
  border-radius: 20px;
  p {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 20px;
  }
  img {
    height: 100%;
  }
`;

const SuccessAlert = ({ message = 'Success!' }) => {
  return (
    <Wrapper>
      <img src={successIcon} alt="" />
      <p>{message}</p>
    </Wrapper>
  );
};

export default SuccessAlert;
