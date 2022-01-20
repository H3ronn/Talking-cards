import InputField from 'components/molecules/InputField/InputField';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const StyledInputField = styled(InputField)`
  width: 450px;
`;
