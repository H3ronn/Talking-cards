import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotator = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
`;
const colors = keyframes`
 0% {
    stroke: #4285f4;
  }
  25% {
    stroke: #de3e35;
  }
  50% {
    stroke: #f7c223;
  }
  75% {
    stroke: #1b9a59;
  }
  100% {
    stroke: #4285f4;
  }
`;
const dash = keyframes`
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: 46.75;
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
`;

const Spinner = styled.svg`
  animation: ${rotator} 1.4s linear infinite;

  circle {
    stroke-dasharray: 187;
    stroke-dashoffset: 0;
    transform-origin: center;
    animation: ${dash} 1.4s ease-in-out infinite, ${colors} 5.6s ease-in-out infinite;
  }
`;

const Wrapper = styled.div`
  position: ${({ center }) => (center ? 'fixed' : 'relative')};
  transform: ${({ center }) => (center ? 'translate(-50%, -50%)' : 'translate(0,0)')};
  display: inline;
  top: 50%;
  left: 50%;
`;

const Loading = ({ center }) => {
  return (
    <Wrapper center={center}>
      <Spinner width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </Spinner>
    </Wrapper>
  );
};

export default Loading;
