import styled, { keyframes } from 'styled-components';
import CardHover from 'components/molecules/CardHover/CardHover';

const apear = keyframes`
0% {
  opacity: 0;
}

100% {
  opacity: 1;
}
`;

export const StyledCardHover = styled(CardHover)``; //Without this ${CardHover} hover dont work idk why

//I use attrs because prop changes a lot
export const CardWrapper = styled.div.attrs((props) => ({
  style: {
    background: props.backgroundColor,
  },
}))`
  /* z-index: ${({ theme }) => theme.zIndex.card}; */
  animation: ${apear} 0.6s ease-in-out;
  overflow: hidden;
  width: 300px;
  height: 270px;
  margin: 5px 0;
  /* display: grid;
  grid-template-rows: 9fr 1fr; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: 0.3s ease-in;

  transform-origin: top;
  /* transform: scale(0.5); */
  ${({ preview }) => (preview ? 'transform: scale(0.5);' : null)}

  &:hover ${StyledCardHover}, &:focus ${StyledCardHover} {
    transform: translateY(0);
  }
`;

export const ImageWrapper = styled.div`
  max-width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Image = styled.img.attrs(({ imageSize, imagePosition }) => ({
  style: {
    transform: `translateY(${imagePosition}%) scale(${imageSize / 100})`,
  },
}))`
  /* max-width: 400px; */
  min-width: 200px;
  width: 100%;
  max-height: 90%;
`;

export const Caption = styled.p.attrs(({ fontSize, color, spaceValue }) => ({
  style: {
    fontSize: `${fontSize}px`,
    color: color,
    transform: `translateY(${spaceValue}px)`,
  },
}))`
  text-align: center;
  margin: 0;
`;
