import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';

import Login from './Login';
import Register from './Register';

const UnauthenticatedApp = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default UnauthenticatedApp;
