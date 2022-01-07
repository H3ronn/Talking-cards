import React, { useContext, useEffect } from 'react';
import { Wrapper, Gallery, StyledCard } from './CardList.styles';
import Title from 'components/atoms/Title/Title';
import { CardContext } from 'providers/CardProvider';

const CardList = () => {
  const { cards } = useContext(CardContext);
  // const cardsFs = app.collection('cards');
  // const addToStorage = (e) => {
  //   const file = e.target.files[0];
  //   const storageRef = app.storage().ref();
  //   const fileRef = storageRef.child(file.name);
  //   fileRef.put(file).then(() => {
  //     console.log('Uploaded file', file.name);
  //   });
  // };

  useEffect(() => {}, []);

  return (
    <Wrapper>
      <button>tescik</button>
      <Title>Your Cards!</Title>
      <input type="file" />
      <Gallery>
        {[...cards].reverse().map((card) => (
          <StyledCard tabIndex={0} withHover cardStyle={card} id={card.id} key={card.id} />
        ))}
      </Gallery>
    </Wrapper>
  );
};

export default CardList;
