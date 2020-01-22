import React, { MouseEvent } from "react";
import Link from "next/link";
import Head from "next/head";
import { PageTransition } from "next-page-transitions";
import "../styles/index.css";

const App = ({ Component, pageProps }) => {
  let bgRef;

  const hoverColor = (e: MouseEvent) => {
    const x: number = window.innerWidth;
    const y: number = window.innerHeight;
    const mX: number = e.clientX;
    const mY: number = e.clientY;

    if (!bgRef) {
      return;
    }

    bgRef.style.background = `linear-gradient(130deg, rgb(${(200 * mX) /
      x},${(200 * mY) / y},200), rgb(${(200 * mY) / y},120,${(200 * x) / mX})), 
      linear-gradient(210deg, rgb(${(200 * mX) / x},${(200 * mY) / y},${(200 *
      mX) /
      x}), rgb(160,${(200 * mY) / y},${(200 * mX) / x})),
        linear-gradient(330deg, rgb(80,${(200 * y) / mY},${(200 * mX) /
      x}), rgb(100,${(200 * mY) / y},${(200 * mX) / x}))`;

    console.log("mouse x", mX / x);
    console.log("mouse y", mY / y);
  };

  return (
    <div
      onMouseMove={hoverColor}
      ref={node => (bgRef = node)}
      className="App vh vw fix bg-blue fade-in"
    >
      <Head>
        <title>Max Smouha - Developer, Friend</title>
      </Head>
      <div className="vh vw fix noise border" />

      <div className="top right abs my1 mx2 pt05 white o-4 z10 pointer">
        <span className="mr1">
          <Link href="/">
            <a>Projects</a>
          </Link>
        </span>
        <Link href="/about">
          <a>About</a>
        </Link>
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
