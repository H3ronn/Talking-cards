import React, { useContext } from 'react';
import { Wrapper, Gallery, Info } from './CardList.styles';
import Title from 'components/atoms/Title/Title';
import { CardContext } from 'providers/CardProvider';
import Loading from 'components/atoms/Loading/Loading';
import Card from 'components/organisms/Card/Card';

const CardList = () => {
  const { cards, loading } = useContext(CardContext);

  const renderCards = cards.map((card) => <Card tabIndex={0} withHover cardStyle={card} id={card.id} key={card.id} />);

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
