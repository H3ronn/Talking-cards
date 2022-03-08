import React, { useContext, useState } from 'react';
import { Wrapper, Gallery, Info } from './CardList.styles';
import Title from 'components/atoms/Title/Title';
import { CardContext } from 'providers/CardProvider';
import Loading from 'components/atoms/Loading/Loading';
import Card from 'components/organisms/Card/Card';
import SuccessAlert from 'components/molecules/SuccessAlert/SuccessAlert';

const CardList = () => {
  const { cards, loading, deleteCard } = useContext(CardContext);
  const [successMessage, setSuccessMessage] = useState(null);

  const handleDeleteCard = async (id, image) => {
    const result = await deleteCard(id, image);
    if (result) {
      showSuccessAlert();
    }
  };

  const showSuccessAlert = () => {
    if (!successMessage) {
      setTimeout(() => {
        setSuccessMessage(null);
      }, 2000);
    }
    setSuccessMessage('Card successfully deleted');
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
      {successMessage ? <SuccessAlert message={successMessage} /> : null}
      {optionalRender()}
    </Wrapper>
  );
};

export default CardList;
