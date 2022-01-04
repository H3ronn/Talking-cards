import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import { CardContext } from 'providers/CardProvider';
import { useNavigate } from 'react-router-dom';
import EditCardSection from 'components/templates/EditCardSection/EditCardSection';
import Title from 'components/atoms/Title/Title';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditCard = () => {
  const { selectedCard } = useContext(CardContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedCard) {
      navigate('/list');
    }
  }, [navigate, selectedCard]);

  return (
    <Wrapper>
      <Title>Edit your card</Title>
      <EditCardSection cardStyle={selectedCard} />
    </Wrapper>
  );
};

export default EditCard;
