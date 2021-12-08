import React from 'react';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import { Wrapper } from './InputField.styles';
import InputFile from 'components/atoms/InputButton/InputButton';

const InputField = ({ onChange, type, id, name, label, placeholder = '', children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Label htmlFor={id}>{label}</Label>
      {type === 'file' ? (
        <InputFile id={id} name={name} />
      ) : (
        <Input autoComplete="off" type={type} id={id} name={name} placeholder={placeholder} onChange={onChange} />
      )}
    </Wrapper>
  );
};

export default InputField;
