import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { StyledCardHover, CardWrapper, ImageWrapper, Caption, Image } from './Card.styles';
import { CardContext } from 'providers/CardProvider';

const initialStyle = {
  caption: 'Caption',
  captionColor: '#ffffff',
  fontSize: 50,
  image: null,
  bgColor: '#0000ff',
  spaceValue: 0,
};

const Card = React.forwardRef(({ cardStyle = initialStyle, withHover, id, ...props }, ref) => {
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

Card.propTypes = {
  cardStyle: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    captionColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    image: PropTypes.string,
    fontSize: PropTypes.number.isRequired,
    spaceValue: PropTypes.number.isRequired,
  }).isRequired,
  id: PropTypes.string,
  withHover: PropTypes.bool,
};

export default Card;
