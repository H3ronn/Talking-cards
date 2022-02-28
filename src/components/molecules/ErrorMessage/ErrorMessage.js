import React from 'react';
import { Wrapper, ErrorHeader, Message } from './ErrorMessage.styles';

const ErrorMessage = ({ message = 'Some error occurs!' }) => {
  return (
    <Wrapper>
      <ErrorHeader>Oops</ErrorHeader>
      <Message>{message}</Message>
    </Wrapper>
  );
};

export default ErrorMessage;
