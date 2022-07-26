import React from 'react';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Wrapper = styled.div`
  background-color: #d8dde9;
  border: #d8dde9 0.1px solid; //without this it gets margin when we set margin in children
`;

const UnauthenticatedApp = () => {
  return (
    <Wrapper>
      <Routes>
        <Route path="*" element={<Login />} />
        {/* <Route path="*" element={<Navigate to="/login" />} /> This causes a memory leak warning*/}
        <Route path="/register" element={<Register />} />
      </Routes>
    </Wrapper>
  );
};

export default UnauthenticatedApp;
