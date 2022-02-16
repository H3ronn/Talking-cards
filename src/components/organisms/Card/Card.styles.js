import styled from 'styled-components';
import CardHover from 'components/molecules/CardHover/CardHover';

export const StyledCardHover = styled(CardHover)``; //Without this ${CardHover} hover dont work idk why

//I use attrs because prop changes a lot
export const CardWrapper = styled.div.attrs((props) => ({
  style: {
    background: props.backgroundColor,
  },
}))`
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

export const Image = styled.img`
  /* max-width: 400px; */
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
