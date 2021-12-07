import React from 'react';
import Input from 'components/atoms/Input/Input';
import Label from 'components/atoms/Label/Label';
import { Wrapper } from './InputField.styles';
import InputFile from 'components/atoms/InputFile/InputFile';

const InputField = ({ onChange, type, id, name, label, placeholder = '', children }) => {
  return (
    <Wrapper>
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
