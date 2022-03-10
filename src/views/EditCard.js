import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import EditCardSection from 'components/templates/EditCardSection/EditCardSection';
import Title from 'components/atoms/Title/Title';
import { useCards } from 'hooks/useCards';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditCard = () => {
  const { selectedCard } = useCards();
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
