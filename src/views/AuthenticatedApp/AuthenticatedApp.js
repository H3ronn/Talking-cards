import React from 'react';
import CreateCard from '../CreateCard/CreateCard';
import { Route, Routes, Navigate } from 'react-router-dom';
import CardList from '../CardList/CardList';
import EditCard from '../EditCard/EditCard';
import Navigation from 'components/organisms/Navigation/Navigation';
import Faq from '../Faq/Faq';
import CardProvider from 'providers/CardProvider';

const AuthenticatedApp = () => {
  return (
    <CardProvider>
      <Navigation />
      <Routes>
        <Route path="*" element={<Navigate to="list" />} />
        <Route path="/list" element={<CardList />} />
        <Route path="/create" element={<CreateCard />} />
        <Route path="/edit" element={<EditCard />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
    </CardProvider>
  );
};

export default AuthenticatedApp;
