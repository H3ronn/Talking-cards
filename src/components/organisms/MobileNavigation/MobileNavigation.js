import Title from 'components/atoms/Title/Title';
import LanguageSwitch from 'components/molecules/LanguageSwitch/LanguageSwitch';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { Wrapper, StyledNavLink } from './MobileNavigation.styles';

const MobileNavigation = ({ isOpen = false, hideMenu }) => {
  const { t } = useTranslation();

  const handleCloseMenu = (e) => {
    const isLink = e.target.href;
    if (isLink) {
      hideMenu();
    }
  };

  return (
    <Wrapper isOpen={isOpen} onClick={handleCloseMenu}>
      <Title>Talking cards</Title>
      <ul>
        <li>
          <StyledNavLink to="/list">{t('Card list')}</StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/create">{t('Create card')}</StyledNavLink>
        </li>
        <li></li>
        <li>
          <StyledNavLink to="/faq">{t('FAQ')}</StyledNavLink>
        </li>
        <li>
          <LanguageSwitch />
        </li>
      </ul>
    </Wrapper>
  );
};

export default MobileNavigation;
