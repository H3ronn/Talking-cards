import React from 'react';
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

const Wrapper = styled.div`
  @media (max-width: 500px) {
    padding: 20px 50px;
  }
  width: 100%;
  padding: 50px 100px;
`;

const StyledDetails = styled.details`
  margin: 10px 0 30px;
  position: relative;
  summary {
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

  summary:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.blue};
  }

  @media not all and (min-resolution: 0.001dpcm) {
    @supports (-webkit-appearance: none) and (stroke-color: transparent) {
      summary::-webkit-details-marker {
        display: none;
      }

      summary:focus {
        outline: 3px solid ${({ theme }) => theme.colors.blue};
      }
    }
  }

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

const Faq = () => {
  return (
    <Wrapper>
      <StyledDetails>
        <summary>Co moge stworzyc w tej aplikacji.</summary>
        <div>
          <p>Informacje szczegółowe na dany temat.</p>
        </div>
      </StyledDetails>
      <StyledDetails>
        <summary>Gdzie moge zglosic bugi/propozycje</summary>
        <div>
          <p>
            Informacje szczegółowe na dany temat. Informacje szczegółowe na dany temat. Informacje szczegółowe na dany
            temat. Informacje szczegółowe na dany temat.
          </p>
        </div>
      </StyledDetails>
      <StyledDetails>
        <summary>Gdzie moge zglosic bugi/propozycje</summary>
        <div>
          <p>Informacje szczegółowe na dany temat.</p>
        </div>
      </StyledDetails>
      <StyledDetails>
        <summary>Gdzie moge zglosic bugi/propozycje</summary>
        <div>
          <p>Informacje szczegółowe na dany temat.</p>
        </div>
      </StyledDetails>
    </Wrapper>
  );
};

export default Faq;
