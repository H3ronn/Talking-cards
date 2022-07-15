import Accordion from 'components/molecules/Accordion/Accordion';
import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  @media (max-width: 500px) {
    padding: 20px 50px;
  }
  width: 100%;
  padding: 50px 100px;
`;

const Faq = () => {
  return (
    <Wrapper>
      <Accordion
        question="What can I do in this application?"
        answer="In this application you can create cards to help communication with mute people. You can download and print them."
      />
      <Accordion question="Where can I send informations about bugs/features?" answer="To my e-mail h3ronn@gmail.com" />
    </Wrapper>
  );
};

export default Faq;
