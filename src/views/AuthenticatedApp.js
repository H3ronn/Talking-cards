import React from 'react';
import CreateCard from './CreateCard';
import { Route, Routes, Navigate } from 'react-router-dom';
import CardList from './CardList';
import EditCard from './EditCard';
import Login from './Login';
import Register from './Register';

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="list" />} />
      <Route path="/list" element={<CardList />} />
      <Route path="/create" element={<CreateCard />} />
      <Route path="/edit" element={<EditCard />} />
      <Route path="/faq" element={<h1>faq</h1>} />
      <Route path="/help" element={<h1>help</h1>} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default AuthenticatedApp;
