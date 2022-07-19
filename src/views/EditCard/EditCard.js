import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import EditCardSection from 'components/templates/EditCardSection/EditCardSection';
import Title from 'components/atoms/Title/Title';
import { useSelector } from 'react-redux';
import { selectCards } from 'redux/cards/cardsSlice';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditCard = () => {
  const { selectedCard } = useSelector(selectCards);
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
