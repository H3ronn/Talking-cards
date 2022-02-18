import styled, { keyframes } from 'styled-components';

const showBox = keyframes`
0% {
  transform: scaleY(0);
}
100% {
  transform: scaleY(1);
}`;

const showText = keyframes`
0% {
  opacity: 0;
  transform: translate(-8px, 8px);
}
100% {
  opacity: 1;
  transform: translate(0, 0);
}`;

export const StyledDetails = styled.details`
  margin: 10px 0 30px;
  position: relative;

  &[open] {
    summary::after {
      transform: rotate(-90deg);
    }
  }
  // Firefox animation workaround
  &[open] div {
    display: block;
  }

  div {
    display: none;
    transform: scaleY(0);
    transform-origin: 0 0;
    animation: 0.4s ease-in-out 1 forwards ${showBox};
    margin: 10px 0;
    padding: 10px;
    border: solid 3px ${({ theme }) => theme.colors.blue};
    border-top: none;
    border-right: none;
    p {
      margin: 0;
      opacity: 0;
      animation: ${showText} 0.2s 0.5s 1 ease-in forwards;
    }
  }
`;

export const StyledSummary = styled.summary`
  & {
    font-size: 1.2rem;
    cursor: pointer;
    list-style: none;

    &::after {
      content: '»';
      font-weight: bold;
      position: absolute;
      top: 0;
      left: -25px;
      transform: rotate(90deg);
      transition: transform 0.2s ease-in-out;
    }
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.blue};
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      &::-webkit-details-marker {
        display: none;
      }

      &:focus {
        outline: 3px solid ${({ theme }) => theme.colors.blue};
      }
    }
  }
`;
