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
        answer="In this application you can create cards to help communication with mute people."
      />
      <Accordion
        question="Where can I send informations about bugs/features?"
        answer="Informacje szczegółowe na dany temat. Informacje szczegółowe na dany temat. Informacje szczegółowe na dany
        temat. Informacje szczegółowe na dany temat."
      />
    </Wrapper>
  );
};

export default Faq;
