import React from 'react';
import AppProviders from 'providers/AppProviders';
import ReactDOM from 'react-dom';
import App from './views/Root';

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
);
