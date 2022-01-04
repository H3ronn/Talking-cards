import React, { useContext } from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import Card from 'components/organisms/Card/Card';
import { CardContext } from 'providers/CardProvider';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
`;

const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, auto));
  width: 100%;
  justify-content: center;
  grid-gap: 10px;

  & > div {
  }
`;

const StyledCard = styled(Card)`
  position: relative;
  overflow: hidden;

  pre {
    content: 'Click to edit';
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    font-size: 50px;
    background-color: rgba(255, 255, 255, 0.8);
    width: 100%;
    height: 100%;
    transform: translateY(-100%);
    transition: transform 0.2s ease-in-out;
  }
`;

const CardList = () => {
  const { cards } = useContext(CardContext);

  return (
    <Wrapper>
      <Title>Your Cards!</Title>
      <Gallery>
        {[...cards].reverse().map((card) => (
          <StyledCard tabIndex={0} withHover cardStyle={card} id={card.id} key={card.id} />
        ))}
      </Gallery>
    </Wrapper>
  );
};

export default CardList;
