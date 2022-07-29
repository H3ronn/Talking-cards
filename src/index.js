import React from 'react';
import ReactDOM from 'react-dom';
import Root from './views/Root/Root';
import AppProviders from 'providers/AppProviders';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import Loading from 'components/atoms/Loading/Loading';
import 'i18n';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProviders>
        <React.Suspense fallback={<Loading />}>
          <Root />
        </React.Suspense>
      </AppProviders>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
