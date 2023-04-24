import React from 'react';
import NavLink from '../components/navlink';
import Head from 'next/head';
import { NextPage } from 'next';
import '../styles/index.css';

interface Props {
  Component: NextPage;
  pageProps: any;
}

const App = ({ Component, pageProps }: Props) => {
  return (
    <>
      <Head>
        <title>Max Smouha</title>
        <meta
          name="description"
          content="Max Smouha builds software &amp; businesses."
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
      </Head>

      <Component {...pageProps} />
    </>
  );
};

export default App;
