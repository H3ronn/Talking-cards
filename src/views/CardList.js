import Card from 'components/organisms/Card/Card';
import React, { useContext } from 'react';
import { CardContext } from './Root';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & > div {
    margin: 5px;
  }
`;

const CardList = () => {
  const { cards } = useContext(CardContext);

  return (
    <Wrapper>
      <h1>Your Cards!</h1>
      <Gallery>
        {cards.map((card, id) => (
          <Card
            image={card.image}
            bgColor={card.bgColor}
            captionColor={card.captionColor}
            fontSize={card.fontSize}
            spaceValue={card.spaceValue}
            caption={card.caption}
            key={id}
          />
        ))}
      </Gallery>
    </Wrapper>
  );
};

export default CardList;
