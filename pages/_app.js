import React from 'react';
import { Provider } from 'react-redux';
import withRedux from 'next-redux-wrapper';
import Header from '../components/Header';
import store from '../redux/store.ts';
import './styles.css';
import 'react-toastify/dist/ReactToastify.css';

const MyApp = props => {
  const { Component, pageProps } = props;
  return (
    <Provider store={store}>
      <Header />
      <Component {...pageProps} />
    </Provider>
  );
};

const makeStore = () => store;

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const pageProps = Component.getInitialProps
    ? await Component.getInitialProps(ctx)
    : {};
  return { pageProps };
};

export default withRedux(makeStore)(MyApp);
