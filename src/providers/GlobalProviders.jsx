import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import store, { persistor } from '@/redux/store';
import TanstackQueryProvider from './TanstackQueryProvider';

const GlobalProviders = ({ children }) => {
  return (
    <TanstackQueryProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>{children}</PersistGate>
      </Provider>
    </TanstackQueryProvider>
  );
};

export default GlobalProviders;
