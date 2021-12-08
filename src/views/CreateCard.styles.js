import InputField from 'components/molecules/InputField/InputField';
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
  /* display: grid;
  grid-template-rows: 9fr 1fr; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Caption = styled.p`
  text-align: center;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => color};
  transform: ${({ spaceValue }) => `translateY(${spaceValue}px)`};
  margin: 0;
  margin-top: 80px;
`;

export const ImageWrapper = styled.div`
  width: 400px;
  /* height: 400px; */
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img`
  max-width: 400px;
  /* transform: scale(1.5); */
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
  justify-content: space-between;
  margin-top: 10px;
`;

export const StyledInputField = styled(InputField)`
  width: 450px;
`;

export const InputColor = styled(InputField)`
  margin: 0;
  margin-left: 20px;
  input {
    opacity: 0;
    width: 0.1px;
    height: 0.1px;
    position: absolute;

    &:hover + label,
    &:focus + label {
      transform: scale(1.05);
    }
  }

  Label {
    display: block;
    color: white;
    background-color: ${({ theme }) => theme.colors.blue};
    width: max-content;
    padding: 8px 12px;
    cursor: pointer;
    transition: transform 0.2s ease-in-out;
  }
`;
