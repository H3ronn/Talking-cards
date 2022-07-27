import React, { useEffect, useState } from 'react';
import { Wrapper, SliderText, SliderImg, SliderButton, Line } from './Presentation.styles';

const imagesArray = [require('./create.png').default, require('./cards.png').default];

const Presentation = () => {
  const [page, setPage] = useState(1);

  useEffect(() => {
    const intervalId = setTimeout(() => {
      page === 1 ? setPage(2) : setPage(1);
    }, 6000);

    return () => clearTimeout(intervalId);
  }, [page]);

  return (
    <Wrapper>
      <SliderButton onClick={() => setPage(1)}>
        <Line active={page === 1} />
      </SliderButton>
      <SliderButton onClick={() => setPage(2)}>
        <Line active={page === 2} />
      </SliderButton>
      {page === 1 ? <SliderText>Create your own cards!</SliderText> : null}
      {page === 2 ? <SliderText>Print, edit and delete them!</SliderText> : null}
      <SliderImg key={page} src={imagesArray[page - 1]} alt="" />
      {/* with key its rerendering when page change and triggering animation */}
    </Wrapper>
  );
};

export default Presentation;
