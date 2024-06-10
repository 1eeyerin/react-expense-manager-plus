import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import { PersistGate } from 'redux-persist/integration/react';
import GlobalStyles from '@/styles/globalStyles';
import App from './App';
import store, { persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
);
