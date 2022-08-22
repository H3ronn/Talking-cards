import React from 'react';
import { useTranslation } from 'react-i18next';
import Select from 'react-select';

const options = [
  { value: 'pl', label: 'Polish' },
  { value: 'en', label: 'English' },
];

const flag = (name) => {
  if (!name) return;
  return {
    alignItems: 'center',
    display: 'flex',

    ':before': {
      background: `url(${require(`./${name}_flag.png`).default}) no-repeat 50% 50%`,
      backgroundSize: 'contain',
      marginRight: '10px',
      content: '" "',
      display: 'block',
      minHeight: '30px',
      maxHeight: '30px',
      minWidth: '50px',
      maxWidth: '50px',
    },
  };
};

const styles = {
  control: (styles) => {
    return { ...styles, minWidth: 200 };
  },
  option: (styles, { value }) => {
    return { ...styles, ...flag(value) };
  },

  singleValue: (styles, { data }) => {
    return { ...styles };
  },
};

const LanguageSwitch = ({ ...props }) => {
  const { i18n } = useTranslation();

  const getCurrentLanguageName = () => options.find((option) => option.value === i18n.language)?.label;

  return (
    <div {...props}>
      <Select
        options={options}
        styles={styles}
        isSearchable={false}
        placeholder={getCurrentLanguageName()}
        onChange={({ value }) => i18n.changeLanguage(value)}
      />
    </div>
  );
};

export default LanguageSwitch;
