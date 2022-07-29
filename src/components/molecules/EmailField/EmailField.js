import React from 'react';
import { useTranslation } from 'react-i18next';
import InputField from '../InputField/InputField';
import userIcon from './userIcon.svg';

const EmailField = ({ onChange, value, ...props }) => {
  const { t } = useTranslation();
  return (
    <InputField
      type="email"
      label={t('Your e-mail')}
      name="email"
      id="email"
      placeholder={t('Your e-mail')}
      icon={userIcon}
      onChange={onChange}
      value={value}
      {...props}
    />
  );
};

export default EmailField;
