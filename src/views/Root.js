import React, { useState } from 'react';
import { GlobalStyles } from 'assets/styles/GlobalStyle';
import CreateCard from './CreateCard';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import Navigation from 'components/organisms/Navigation/Navigation';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import CardList from './CardList';
import CardProvider from 'providers/CardProvider';

const Root = () => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CardProvider>
          <GlobalStyles />
          <Navigation />
          <Routes>
            <Route path="/" element={<Navigate to="create" />} />
            <Route path="/list" element={<CardList />} />
            <Route path="/create" element={<CreateCard />} />
            <Route path="/faq" element={<h1>faq</h1>} />
            <Route path="/help" element={<h1>help</h1>} />
            <Route path="/login" element={<h1>login/register</h1>} />
          </Routes>
        </CardProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default Root;
