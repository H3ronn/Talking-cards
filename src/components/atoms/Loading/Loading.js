import React from 'react';
import { Wrapper, Spinner } from './Loading.styles';

const Loading = ({ center }) => {
  return (
    <Wrapper center={center}>
      <Spinner width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
        <circle fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
      </Spinner>
    </Wrapper>
  );
};

export default Loading;
