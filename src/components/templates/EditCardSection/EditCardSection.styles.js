import InputField from 'components/molecules/InputField/InputField';
import Card from 'components/organisms/Card/Card';
import styled from 'styled-components';

export const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledCard = styled(Card)`
  z-index: ${({ theme }) => theme.zIndex.card};
  position: sticky;
  top: 10px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 800px;
  button {
    margin: 5px 5px;
    box-shadow: ${({ theme }) => theme.colors.blue} 0px 2px 8px 0px;
  }
  label {
    margin: 5px 0;
    box-shadow: ${({ theme }) => theme.colors.blue} 0px 2px 8px 0px;
  }
`;

export const StyledInputField = styled(InputField)`
  margin-bottom: 10px;
`;
