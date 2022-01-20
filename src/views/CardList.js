import React, { useContext } from 'react';
import { Wrapper, Gallery, StyledCard } from './CardList.styles';
import Title from 'components/atoms/Title/Title';
import { CardContext } from 'providers/CardProvider';

const CardList = () => {
  const { cards } = useContext(CardContext);

  // const deleteCard = () => {
  //   const docRef = doc(db, 'cards', test);
  //   deleteDoc(docRef).then((data) => {});
  // };

  return (
    <Wrapper>
      <Title>Your Cards!</Title>
      <Gallery>
        {cards.map((card) => (
          <StyledCard tabIndex={0} withHover cardStyle={card} id={card.id} key={card.id} />
        ))}
      </Gallery>
    </Wrapper>
  );
};

export default CardList;
