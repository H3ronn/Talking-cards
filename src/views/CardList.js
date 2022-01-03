import Card from 'components/organisms/Card/Card';
import { CardContext } from 'providers/CardProvider';
import React, { useContext } from 'react';
import styled from 'styled-components';

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
      <h1>Your Cards!</h1>
      <Gallery>
        {[...cards].reverse().map(({ image, bgColor, captionColor, fontSize, spaceValue, caption, id }) => (
          <StyledCard
            tabIndex={0}
            withHover
            image={image}
            bgColor={bgColor}
            captionColor={captionColor}
            fontSize={fontSize}
            spaceValue={spaceValue}
            caption={caption}
            id={id}
            key={id}
          />
        ))}
      </Gallery>
    </Wrapper>
  );
};

export default CardList;
