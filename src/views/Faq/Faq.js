import Accordion from 'components/molecules/Accordion/Accordion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 500px) {
    padding: 20px 50px;
  }
  width: 100%;
  padding: 50px 100px;
`;

const Faq = () => {
  const { t } = useTranslation();
  return (
    <Wrapper>
      <Accordion
        question={t('What can I do in this application?')}
        answer={t(
          'In this application you can create cards to help communication with mute people. You can download and print them.'
        )}
      />
      <Accordion
        question={t('Where can I send informations about bugs/features?')}
        answer={t('To my e-mail czaplickibartosz0@gmail.com')}
      />
    </Wrapper>
  );
};

export default Faq;
