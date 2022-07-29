import React from 'react';
import EditCardSection from 'components/templates/EditCardSection/EditCardSection';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import { useTranslation } from 'react-i18next';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateCard = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Title>{t('Create card')}</Title>
      <EditCardSection />
    </Wrapper>
  );
};

export default CreateCard;
