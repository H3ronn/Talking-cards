import React from 'react';
import InputField from '../InputField/InputField';
import passwordIcon from './passwordIcon.svg';

const PasswordField = ({ onChange, value, ...props }) => {
  return (
    <InputField
      type="password"
      label="Password"
      name="password"
      id="password"
      placeholder="Password"
      icon={passwordIcon}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default PasswordField;
