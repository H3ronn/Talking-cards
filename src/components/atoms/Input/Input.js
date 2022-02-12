import styled from 'styled-components';

const Input = styled.input`
  height: 40px;
  font-size: 16px;
  padding: 10px;
  border-radius: 25px;
  width: 350px;
  @media (max-width: 500px) {
    width: 80vw;
  }
`;

export default Input;
