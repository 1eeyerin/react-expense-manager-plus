import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from '@/styles/globalStyles';
import { GlobalProviders } from '@/providers';
import App from './App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles />
    <GlobalProviders>
      <App />
    </GlobalProviders>
  </React.StrictMode>,
);
