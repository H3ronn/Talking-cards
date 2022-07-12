import React from 'react';
import ReactDOM from 'react-dom';
import App from './views/Root';
import AppProviders from 'providers/AppProviders';
import { Provider } from 'react-redux';
import { store } from 'Redux/store';

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
