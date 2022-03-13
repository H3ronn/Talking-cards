import styled from 'styled-components';

export const HoverWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  position: absolute;
  top: 0;
  font-size: 50px;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  transform: translateY(-100%);
  transition: transform 0.2s ease-in-out;

  &:focus-within {
    transform: translateY(0);
  }
`;
export const HoverButton = styled.button`
  background: transparent;
  font-size: 18px;
  font-weight: bold;
  border: 3px solid black;
  padding: 8px 20px;
  border-radius: 8px;
  margin: 20px 0;
  cursor: pointer;

  &:hover,
  &:focus {
    transform: scale(1.15);
  }
`;
