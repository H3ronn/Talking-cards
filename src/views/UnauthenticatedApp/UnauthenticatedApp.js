import AuthTemplate from 'components/templates/AuthTemplate/AuthTemplate';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Wrapper = styled.div`
  background-color: #d8dde9;
  border: #d8dde9 0.1px solid; //without this it gets margin when we set margin in children
  min-height: 100vh;
  display: flex;
  align-items: center;
`;

const UnauthenticatedApp = () => {
  return (
    <Wrapper>
      <AuthTemplate>
        <Routes>
          <Route path="*" element={<Login />} />
          {/* <Route path="*" element={<Navigate to="/login" />} /> This causes a memory leak warning*/}
          <Route path="/register" element={<Register />} />
        </Routes>
      </AuthTemplate>
    </Wrapper>
  );
};

export default UnauthenticatedApp;
