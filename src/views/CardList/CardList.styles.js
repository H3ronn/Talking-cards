import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* width: 100vw; */
`;

export const Gallery = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  width: 100%;
  justify-content: center;
  grid-gap: 10px;

  & > div {
  }
`;

export const Info = styled.p`
  font-size: 1.5em;
`;
