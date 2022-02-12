import styled from 'styled-components';
import CardHover from 'components/molecules/CardHover/CardHover';

export const StyledCardHover = styled(CardHover)``; //Without this ${CardHover} hover dont work idk why

export const CardWrapper = styled.div`
  overflow: hidden;
  width: 300px;
  height: 270px;
  margin: 5px auto;
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

export const Caption = styled.p`
  text-align: center;
  font-size: ${({ fontSize }) => `${fontSize}px`};
  color: ${({ color }) => color};
  transform: ${({ spaceValue }) => `translateY(${spaceValue}px)`};
  margin: 0;
  /* margin-top: 80px; */
`;
