import React from 'react';
import PropTypes from 'prop-types';
import { StyledCardHover, CardWrapper, ImageWrapper, Caption, Image } from './Card.styles';
import { useCards } from 'hooks/useCards';

const initialStyle = {
  caption: `I'm happy`,
  captionColor: '#ffffff',
  fontSize: 30,
  image: null,
  bgColor: '#0000ff',
  spaceValue: 0,
};

const Card = React.forwardRef(({ cardStyle = initialStyle, withHover, id, preview, deleteCard, ...props }, ref) => {
  const { editCard } = useCards();

  const { bgColor, image, captionColor, fontSize, spaceValue, caption, imageSize, imagePosition } = cardStyle;
  return (
    <CardWrapper preview={preview} ref={ref} backgroundColor={bgColor} {...props}>
      <ImageWrapper>
        <Image
          src={image ? image : require('./defaultImage.svg').default}
          alt=""
          imageSize={imageSize}
          imagePosition={imagePosition}
        />
      </ImageWrapper>
      <Caption color={captionColor} fontSize={fontSize} spaceValue={spaceValue}>
        {caption}
      </Caption>
      {withHover ? <StyledCardHover deleteFn={() => deleteCard(id, image)} editFn={() => editCard(id)} /> : null}
    </CardWrapper>
  );
});

Card.propTypes = {
  cardStyle: PropTypes.shape({
    caption: PropTypes.string.isRequired,
    captionColor: PropTypes.string.isRequired,
    bgColor: PropTypes.string.isRequired,
    image: PropTypes.string,
    fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    spaceValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
  id: PropTypes.string,
  withHover: PropTypes.bool,
  deleteCard: PropTypes.func,
};

export default Card;
