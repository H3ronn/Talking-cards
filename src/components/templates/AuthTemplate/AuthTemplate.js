import React from 'react';
import styled from 'styled-components';
import Presentation from 'components/organisms/Presentation/Presentation';
import Title from 'components/atoms/Title/Title';
import LanguageSwitch from 'components/molecules/LanguageSwitch/LanguageSwitch';

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  align-items: center;
  background-color: white;
  border-radius: 30px;
  padding: 10px;
  width: 100vw;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    height: max-content;
    padding: 30px 0;
  }
`;

export const Column = styled.div`
  overflow: hidden;
  border-radius: 0 30px 30px 0;
  width: 100%;
  border-left: solid 4px ${({ theme }) => theme.colors.blue};
  padding-left: 10px;
  background-color: #f5f7fa;
  @media (max-width: 800px) {
    display: none;
  }
`;

const StyledLanguageSwitch = styled(LanguageSwitch)`
  position: fixed;
  top: 10px;
  left: 10px;
`;

const AuthTemplate = ({ children }) => {
  return (
    <>
      <Wrapper>
        <StyledLanguageSwitch />
        {children}
        <Column>
          <Title>Talking Cards</Title>
          <Presentation />
        </Column>
      </Wrapper>
    </>
  );
};

export default AuthTemplate;
