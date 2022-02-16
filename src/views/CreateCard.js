import React from 'react';
import EditCardSection from 'components/templates/EditCardSection/EditCardSection';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CreateCard = () => {
  return (
    <Wrapper>
      <Title>Create card</Title>
      <EditCardSection />
    </Wrapper>
  );
};

export default CreateCard;
