import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from '../Login/Login';
import Register from '../Register/Register';

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path="*" element={<Login />} />
      {/* <Route path="*" element={<Navigate to="/login" />} /> This causes a memory leak warning*/}
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default UnauthenticatedApp;
