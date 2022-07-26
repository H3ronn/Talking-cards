import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import Title from 'components/atoms/Title/Title';
import img1 from './cards.png';
import img2 from './create.png';

export const Wrapper = styled.div`
  border-radius: 0 30px 30px 0;
  height: 100vh;
  width: 100%;
  border-left: solid 4px ${({ theme }) => theme.colors.blue};
  padding-left: 10px;
  background-color: #f5f7fa;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const SliderImg = styled.img`
  width: 70%;
`;

export const SliderButton = styled.button`
  border: none;
  background-color: black;
  margin: 3px;
  width: 20px;
  height: 3px;
  opacity: ${({ active }) => (active ? 1 : 0.5)};
  cursor: pointer;
`;

const imagesArray = [require('./create.png').default, require('./cards.png').default];

const Presentation = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      if (page === 1) {
        setPage(2);
      } else {
        setPage(1);
      }
    }, 3000);

    return () => clearTimeout(intervalId);
  }, [page]);
  return (
    <Wrapper>
      <Title>Talking Cards</Title>
      <SliderButton onClick={() => setPage(1)} active={page === 1}></SliderButton>
      <SliderButton onClick={() => setPage(2)} active={page === 2}></SliderButton>

      {page === 1 ? <p>Create your own cards!</p> : null}
      {page === 2 ? <p>Print, edit and delete them!</p> : null}
      <SliderImg src={imagesArray[page - 1]} alt="" />
    </Wrapper>
  );
};

export default Presentation;
