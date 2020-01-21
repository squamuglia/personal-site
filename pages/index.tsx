import React, { useState, MouseEvent } from "react";
import About from "../components/about";
import Home from "../components/home";
import Head from "next/head";
import "../styles/index.css";
import { NextPage } from "next";

const App: NextPage = () => {
  let bgRef;
  const [fade, setFade] = useState<"fadeIn" | "fadeOut" | "none">("none");

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

    console.log("mouse x", mX / x, "mouse y", mY / y);
  };

  const toggleHome = () => {
    if (fade === "fadeIn") {
      setFade("fadeOut");
      return setTimeout(() => setFade("none"), 500);
    } else {
      setFade("fadeIn");
    }
  };

  return (
    <>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="I build friendly things in React, Node, WordPress &amp; Shopify"
        />
        <meta
          name="keywords"
          content="developer, web development, app development, node, javascript"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
        <link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css?family=Nova+Cut|Space+Mono"
          rel="stylesheet"
        />
        <title>Max Smouha - Developer, Friend</title>
      </Head>

      <div className="slowFade" onMouseMove={hoverColor}>
        <div ref={node => (bgRef = node)} className="App vh vw fix bg-blue" />
        <div className="vh vw fix noise border" />

        <div className="top right abs my1 mx2 pt05 white o-4 z10 pointer">
          <span className="mr1" onClick={toggleHome}>
            Projects
          </span>
          <span onClick={toggleHome}>About</span>
        </div>

        <div className="aic jcc f fw p1 yview">
          <div className="container-m px2 fa ac o-4 white">
            <About style={fade} toggle={toggleHome} />
            <Home />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
