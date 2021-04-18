/* eslint-disable react/jsx-filename-extension,react/react-in-jsx-scope */
import '../styles/globals.css';
import { Provider } from 'react-redux';
import { configureStore } from '../store/store';

const store = configureStore();

// eslint-disable-next-line react/prop-types
const MyApp = ({ Component, pageProps }) => (
  <Provider store={store}>
    {/* eslint-disable-next-line react/jsx-props-no-spreading */}
    <Component {...pageProps} />
  </Provider>
);

export default MyApp;
