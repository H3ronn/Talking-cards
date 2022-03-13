import React from 'react';
import warningIcon from 'assets/warningIcon.webp';
import { Wrapper } from './WarningAlert.styles';

const WarningAlert = ({ children }) => (
  <Wrapper>
    <img src={warningIcon} alt="" />
    {children}
  </Wrapper>
);

export default WarningAlert;
