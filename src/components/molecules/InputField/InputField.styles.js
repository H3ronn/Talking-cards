import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* width: 450px; */
  margin-top: 24px;

  input {
    padding-left: ${({ hasIcon }) => (hasIcon ? '40px' : '10px')};
  }

  input:not(:placeholder-shown) + label {
    transform: translateY(-100%);
    opacity: 1;
  }

  &::after {
    content: ${(props) => console.log(props)};
  }

  img {
    position: absolute;
    top: 15px;
    left: 15px;
    height: 20px;
  }
`;

export const Label = styled.label`
  position: absolute;
  opacity: 0;
  transition: transform 0.3s 0.3s ease-in-out, opacity 0.3s ease-in-out;
`;
