import styled, { keyframes } from 'styled-components';

const slideAnimation = keyframes`
from {
  transform: translate(-50%, calc(-100% - 10px));
}
to {
  transform: translate(-50%, 0);
}
`;

export const Wrapper = styled.div`
  z-index: ${({ theme }) => theme.zIndex.warningAlert};
  position: fixed;
  top: 0;
  left: 50%;
  display: flex;
  align-items: center;
  /* transform: translate(-50%, 100%); */
  /* background-color: ${({ theme }) => theme.colors.warning}; */
  background-color: white;
  margin-top: 10px;
  /* box-shadow: 0 5px 15px -10px rgba(0, 0, 0, 0.3); */

  border-radius: 25px;
  border: solid 5px #ee9500;
  /* font-size: 1.5rem; */
  padding: 20px;
  animation: ${slideAnimation} 0.3s ease-in-out forwards, ${slideAnimation} 0.3s 5s ease-in-out forwards reverse;

  img {
    width: 40px;
    height: 40px;
    margin-right: 5px;
  }
`;
