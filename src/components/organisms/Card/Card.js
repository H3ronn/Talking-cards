import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CardHover from 'components/molecules/CardHover/CardHover';
import { CardContext } from 'providers/CardProvider';

const StyledCardHover = styled(CardHover)``; //Without this ${CardHover} hover dont work idk why

export const CardWrapper = styled.div`
  width: 450px;
  height: 500px;
  margin-top: 5px;
  background-color: ${({ theme, backgroundColor }) => (backgroundColor ? backgroundColor : theme.colors.blue)};
  /* display: grid;
  grid-template-rows: 9fr 1fr; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  &:hover ${StyledCardHover}, &:focus ${StyledCardHover} {
    transform: translateY(0);
  }
`;

export const ImageWrapper = styled.div`
  width: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Caption = styled.p`
  text-align: center;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => color};
  transform: ${({ spaceValue }) => `translateY(${spaceValue}px)`};
  margin: 0;
  margin-top: 80px;
`;

export const Image = styled.img`
  max-width: 400px;
`;

// const initialStyle = {
//   caption: 'Caption',
//   captionColor: '#ffffff',
//   fontSize: 50,
//   image: null,
//   bgColor: '#0000ff',
//   spaceValue: 0,
// };

const Card = React.forwardRef(({ cardStyle, withHover, id, ...props }, ref) => {
  const { deleteCard, editCard } = useContext(CardContext);

  const { bgColor, image, captionColor, fontSize, spaceValue, caption } = cardStyle;
  return (
    <CardWrapper ref={ref} backgroundColor={bgColor} {...props}>
      <ImageWrapper>
        <Image src={image ? image : require('./defaultImage.jpg').default} alt="" />
      </ImageWrapper>
      <Caption color={captionColor} fontSize={fontSize} spaceValue={spaceValue}>
        {caption}
      </Caption>
      {withHover ? <StyledCardHover deleteFn={() => deleteCard(id)} editFn={() => editCard(id)} /> : null}
    </CardWrapper>
  );
});

Card.propTypes = {};

export default Card;
