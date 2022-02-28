import InputField from 'components/molecules/InputField/InputField';
import Card from 'components/organisms/Card/Card';
import styled from 'styled-components';

export const StyledCard = styled(Card)`
  position: sticky;
  top: 10px;
`;

export const Wrapper = styled.div`
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
  }
  label {
    margin: 5px 0;
  }
`;

export const StyledInputField = styled(InputField)`
  margin-bottom: 10px;
`;
