import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 10px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 500px;
  @media (max-width: 750px) {
    width: 60vw;
  }
  span {
    font-size: 20px;
  }
`;

export const Input = styled.input.attrs({ type: 'range' })`
  width: 100%;
`;

export const ControlButton = styled.button`
  background-color: ${({ theme }) => theme.colors.blue};
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 0 5px;
`;
