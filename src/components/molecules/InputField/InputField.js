import React from 'react';
import Input from 'components/atoms/Input/Input';
import { Wrapper, Label } from './InputField.styles';
import InputFile from 'components/atoms/InputButton/InputButton';

const InputField = ({
  onChange,
  type,
  id,
  name,
  label,
  placeholder = '',
  value = '',
  required,
  icon,
  children,
  ...props
}) => {
  return (
    <Wrapper hasIcon={icon !== undefined} {...props}>
      {type === 'file' ? (
        <InputFile id={id} name={name} />
      ) : (
        <Input
          autoComplete="off"
          type={type}
          id={id}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          required={required}
        />
      )}
      <Label htmlFor={id}>{label}</Label>
      <img src={icon} alt="" />
    </Wrapper>
  );
};

export default InputField;
