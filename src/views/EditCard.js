import React, { useContext, useEffect } from 'react';
import Card from 'components/organisms/Card/Card';
import { CardContext } from 'providers/CardProvider';
import { useNavigate } from 'react-router-dom';

const EditCard = () => {
  const { selectedCard } = useContext(CardContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedCard) {
      navigate('/list');
    }
  }, [navigate, selectedCard]);

  return (
    <>
      {/* <Card
        image={selectedCard.image}
        bgColor={selectedCard.bgColor}
        captionColor={selectedCard.captionColor}
        fontSize={selectedCard.fontSize}
        spaceValue={selectedCard.spaceValue}
        caption={selectedCard.caption}
        id={selectedCard.id}
      /> */}
      <Card cardStyle={selectedCard} id={selectedCard.id} />
    </>
  );
};

export default EditCard;
