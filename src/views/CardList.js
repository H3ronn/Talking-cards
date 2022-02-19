import React, { useContext } from 'react';
import { Wrapper, Gallery } from './CardList.styles';
import Title from 'components/atoms/Title/Title';
import { CardContext } from 'providers/CardProvider';
import Loading from 'components/atoms/Loading/Loading';
import Card from 'components/organisms/Card/Card';

const CardList = () => {
  const { cards, loading } = useContext(CardContext);

  const renderCards = cards.map((card) => <Card tabIndex={0} withHover cardStyle={card} id={card.id} key={card.id} />);

  const optionalRender = () => {
    if (loading) return <Loading />;

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
