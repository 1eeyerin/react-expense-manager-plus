import TanstackQueryProvider from './TanstackQueryProvider';

const GlobalProviders = ({ children }) => {
  return <TanstackQueryProvider>{children}</TanstackQueryProvider>;
};

export default GlobalProviders;
