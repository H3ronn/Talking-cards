import React from 'react';
import { Wrapper, Gallery, Info } from './CardList.styles';
import Title from 'components/atoms/Title/Title';
import Loading from 'components/atoms/Loading/Loading';
import Card from 'components/organisms/Card/Card';
import { useCards } from 'hooks/useCards';
import { useAlert } from 'hooks/useAlert';

const CardList = () => {
  const { cards, loading, deleteCard } = useCards();
  const { dispatchAlert } = useAlert();

  const handleDeleteCard = async (id, image) => {
    const result = await deleteCard(id, image);
    if (result) {
      dispatchAlert('Card successfully deleted');
    }
  };

  const renderCards = cards.map((card) => (
    <Card deleteCard={handleDeleteCard} tabIndex={0} withHover cardStyle={card} id={card.id} key={card.id} />
  ));

  const optionalRender = () => {
    if (loading) return <Loading center />;

    if (cards.length > 0) return <Gallery>{renderCards}</Gallery>;

    return <Info>No cards</Info>;
  };

  return (
    <Wrapper>
      <Title>Your Cards!</Title>
      {optionalRender()}
    </Wrapper>
  );
};

export default CardList;
