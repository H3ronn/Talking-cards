import React, { useContext } from 'react';
import { Wrapper, Gallery, StyledCard } from './CardList.styles';
import Title from 'components/atoms/Title/Title';
import { CardContext } from 'providers/CardProvider';

const CardList = () => {
  const { cards, loading } = useContext(CardContext);

  const renderCards = cards.map((card) => (
    <StyledCard tabIndex={0} withHover cardStyle={card} id={card.id} key={card.id} />
  ));

  const optionalRender = () => {
    if (loading) return <p>loading</p>;

    if (cards.length > 0) return renderCards;

    return <p>No cards</p>;
  };

  return (
    <Wrapper>
      <Title>Your Cards!</Title>
      <Gallery>{optionalRender()}</Gallery>
    </Wrapper>
  );
};

export default CardList;
