import React from 'react';
import NavLink from '../components/navlink';
import Head from 'next/head';
import { NextPage } from 'next';
import { PageTransition } from 'next-page-transitions';
import '../styles/index.css';

interface Props {
  Component: NextPage;
  pageProps: any;
}

console.log(
  'Hi, welcome. The background is determinded by your mouse position'
);
const App = ({ Component, pageProps }: Props) => {
  const bgRef = React.useRef(null);

  const hoverColor = (e: React.MouseEvent) => {
    const x: number = window.innerWidth;
    const y: number = window.innerHeight;
    const mX: number = e.clientX;
    const mY: number = e.clientY;

    console.log('mouse x', mX / x);
    console.log('mouse y', mY / y);

    if (bgRef.current) {
      bgRef.current.style.background = `linear-gradient(130deg, rgb(${
        (200 * mX) / x
      },${(200 * mY) / y},200), rgb(${(200 * mY) / y},120,${(200 * x) / mX})), 
      linear-gradient(210deg, rgb(${(200 * mX) / x},${(200 * mY) / y},${
        (200 * mX) / x
      }), rgb(160,${(200 * mY) / y},${(200 * mX) / x})),
        linear-gradient(330deg, rgb(80,${(200 * y) / mY},${
        (200 * mX) / x
      }), rgb(100,${(200 * mY) / y},${(200 * mX) / x}))`;
    }
  };

  return (
    <div onMouseMove={hoverColor}>
      <Head>
        <title>Max Smouha - Developer, Friend</title>
        <meta
          name="description"
          content="I build friendly things in React, Node, WordPress &amp; Shopify"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Nova+Cut|Space+Mono"
          rel="stylesheet"
        />
      </Head>

      <div ref={bgRef} className="vh vw fix bg-default" />
      <div className="vh vw fix noise border" />

      <div className="top right abs my1 mx2 pt05 white o-4 z10 pointer">
        <NavLink href="/" style="mr2">
          Projects
        </NavLink>
        <NavLink href="/about">About</NavLink>
      </div>

      <div className="aic jcc f fw p1 yview">
        <div className="container-m px2 fa ac o-4 white">
          <PageTransition timeout={500} classNames="page-transition">
            <Component {...pageProps} />
          </PageTransition>
        </div>
      </div>
    </div>
  );
};

export default App;
