import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const CardWrapper = styled.div`
  width: 450px;
  height: 500px;
  margin-top: 5px;
  background-color: ${({ theme, backgroundColor }) => (backgroundColor ? backgroundColor : theme.colors.blue)};
  display: grid;
  grid-template-rows: 9fr 1fr;
  align-items: center;
  justify-content: center;
`;

export const Caption = styled.p`
  text-align: center;
`;

export const ImageWrapper = styled.div`
  width: 400px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 400px;
`;

export const StyledButton = styled.button`
  margin-left: 20px;
  color: white;
  background-color: ${({ theme }) => theme.colors.blue};
  width: max-content;
  padding: 8px 12px;
  cursor: pointer;
  border: none;
  font-size: 20px;
  transition: transform 0.2s ease-in-out;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`;
