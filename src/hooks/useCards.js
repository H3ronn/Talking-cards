import { CardContext } from 'providers/CardProvider';
import { useContext } from 'react';

export const useCards = () => {
  const cardContext = useContext(CardContext);

  return cardContext;
};
