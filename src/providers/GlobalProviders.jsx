import { Provider } from 'react-redux';
import store from '@/redux/store';
import TanstackQueryProvider from './TanstackQueryProvider';

const GlobalProviders = ({ children }) => {
  return (
    <TanstackQueryProvider>
      <Provider store={store}>{children}</Provider>
    </TanstackQueryProvider>
  );
};

export default GlobalProviders;
