import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  @media (max-width: 750px) {
    width: 80vw;
  }
  span {
    font-size: 20px;
  }
`;

export const Input = styled.input.attrs({ type: 'range' })`
  width: 100%;
`;
