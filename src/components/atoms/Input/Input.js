import styled from 'styled-components';

const Input = styled.input`
  font-size: 0.9rem;
  height: 50px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  padding: 12px;
  border-radius: 10px;
  width: 100%;
  border: ${({ theme }) => theme.colors.lightGrey} solid 2px;
  /* @media (max-width: 500px) {
    width: 80vw;
  } */
`;

export default Input;
