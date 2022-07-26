import React from 'react';
import styled from 'styled-components';
import Presentation from 'components/organisms/Presentation/Presentation';

export const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  margin: 50px;
  background-color: white;
  border-radius: 30px;
  width: 100%;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    height: max-content;
    padding: 30px 0;
  }
`;

const AuthTemplate = ({ children }) => {
  return (
    <Wrapper>
      {children}
      <Presentation />
    </Wrapper>
  );
};

export default AuthTemplate;
