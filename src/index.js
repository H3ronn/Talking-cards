import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/Root/Root';
import AppProviders from 'providers/AppProviders';
import { Provider } from 'react-redux';
import { store } from 'redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProviders>
        <App />
      </AppProviders>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
