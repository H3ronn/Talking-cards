import React, { useEffect } from 'react';
import { Wrapper, Gallery, Info } from './CardList.styles';
import Title from 'components/atoms/Title/Title';
import Loading from 'components/atoms/Loading/Loading';
import Card from 'components/organisms/Card/Card';
import { useCards } from 'hooks/useCards';
import { useAlert } from 'hooks/useAlert';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from 'firestore';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'Redux/user/userSlice';
import { selectCards, setCards } from 'Redux/cards/cardsSlice';

const CardList = () => {
  const { deleteCard } = useCards();
  const { dispatchAlert } = useAlert();
  const userId = useSelector(selectUser).uid;
  const { cards, loading } = useSelector(selectCards);
  const dispatch = useDispatch();

  const handleDeleteCard = async (id, image) => {
    const result = await deleteCard(id, image);
    if (result) {
      dispatchAlert('Card successfully deleted', 'success');
    }
  };

  useEffect(() => {
    const collName = `cards-${userId}`;
    const colRef = collection(db, collName); //if not exit it create new collection
    const q = query(colRef, orderBy('createdAt'));

    const subscribe = onSnapshot(q, (snapshot) => {
      const savedCards = snapshot.docs.map((card) => {
        const { createdAt, ...cardData } = card.data();
        return {
          id: card.id,
          ...cardData,
        };
      });
      dispatch(setCards(savedCards));
    });

    return () => subscribe();
  }, [userId, dispatch]);

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
