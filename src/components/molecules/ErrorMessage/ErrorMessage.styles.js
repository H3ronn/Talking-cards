import styled, { keyframes } from 'styled-components';

const timer = keyframes`
0% {
  transform: scaleX(1);
}
100% {
  transform: scaleX(0);
}
`;

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

export const Wrapper = styled.div`
  border: ${({ theme }) => theme.colors.red} solid 5px;
  border-radius: 10px;
  padding: 18px 26px;
  width: fit-content;
  max-width: 80vw;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.red};
  position: fixed;
  bottom: 0;
  left: 50%;
  animation: ${slideIn} 0.4s ease-in-out forwards, ${slideOut} 0.4s 5s ease-in-out forwards;

  &:before {
    content: '';
    position: absolute;
    top: 10px;
    left: 20px;
    width: calc(100% - 40px);
    height: 5px;
    border-radius: 12px;
    background-color: ${({ theme }) => theme.colors.lightRed};
  }
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 20px;
    width: calc(100% - 40px);
    transform-origin: left;
    animation: ${timer} 5s linear forwards;
    height: 5px;
    border-radius: 12px;
    background-color: red;
    z-index: 1;
  }
`;
export const ErrorHeader = styled.h2`
  margin: 10px 0;
`;

export const Message = styled.p`
  margin: 10px 0;
`;
