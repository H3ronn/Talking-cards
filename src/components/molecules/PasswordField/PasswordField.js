import React from 'react';
import { useTranslation } from 'react-i18next';
import InputField from '../InputField/InputField';
import passwordIcon from './passwordIcon.svg';

const PasswordField = ({ onChange, value, ...props }) => {
  const { t } = useTranslation();
  return (
    <InputField
      type="password"
      label={t('Password')}
      name="password"
      id="password"
      placeholder={t('Password')}
      icon={passwordIcon}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default PasswordField;
