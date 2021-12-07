import styled from 'styled-components';
import Label from '../Label/Label';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

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

const StyledInputFile = styled.input.attrs({ type: 'file' })`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  position: absolute;

  &:hover + label,
  &:focus + label {
    transform: scale(1.05);
  }
`;

const InputFile = ({ onChange, id, name, label }) => {
  return (
    <Wrapper>
      <StyledInputFile onChange={onChange} id={id} name={name} label={label} />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default InputFile;
