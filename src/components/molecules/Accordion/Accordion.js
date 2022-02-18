import React from 'react';
import { StyledDetails, StyledSummary } from './Accordion.styles';

const Accordion = ({ question, answer }) => {
  return (
    <StyledDetails>
      <StyledSummary>{question}</StyledSummary>
      <div>
        <p>{answer}</p>
      </div>
    </StyledDetails>
  );
};

export default Accordion;
