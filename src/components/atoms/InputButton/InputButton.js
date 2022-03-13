import Label from '../Label/Label';
import { Wrapper, StyledInputButton } from './InputButton.styles';

const InputButton = ({ type = 'file', onChange, id, name, label, ...props }) => {
  return (
    <Wrapper>
      <StyledInputButton type={type} onChange={onChange} id={id} name={name} label={label} {...props} />
      <Label htmlFor={id}>{label}</Label>
    </Wrapper>
  );
};

export default InputButton;
