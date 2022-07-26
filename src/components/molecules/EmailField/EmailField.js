import React from 'react';
import InputField from '../InputField/InputField';
import userIcon from './userIcon.svg';

const EmailField = ({ onChange, value, ...props }) => {
  return (
    <InputField
      type="email"
      label="E-mail"
      name="email"
      id="email"
      placeholder="Your e-mail"
      icon={userIcon}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default EmailField;
