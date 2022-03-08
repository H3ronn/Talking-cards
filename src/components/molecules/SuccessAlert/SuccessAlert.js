import React from 'react';
import successIcon from './successIcon.svg';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 50px;
  display: flex;
  position: fixed;
  top: 50px;
  z-index: ${({ theme }) => theme.zIndex.successAlert};
  align-items: center;
  background: ${({ theme }) => theme.colors.lightGreen};
  color: ${({ theme }) => theme.colors.green};
  padding: 10px 20px;
  border-radius: 20px;
  p {
    font-size: 1.5em;
    font-weight: bold;
    margin: 0 20px;
  }
  img {
    height: 100%;
  }
`;

const SuccessAlert = ({ message = 'Success!' }) => {
  return (
    <Wrapper>
      <img src={successIcon} alt="" />
      <p>{message}</p>
    </Wrapper>
  );
};

export default SuccessAlert;
