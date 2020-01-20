import React, { useState } from "react";
import About from "../components/about";
import Home from "../components/home";
import Head from "next/head";
import "../styles/index.css";
import { NextPage } from "next";

const App: NextPage = () => {
  const [fade, setFade] = useState<"fadeIn" | "fadeOut" | "none">("none");
  const [displayHome, setDisplayHome] = useState<boolean>(true);
  const [backgroundColor, setColor] = useState<{ backgroundColor: string }>({
    backgroundColor: "blue"
  });

  const hoverColor = e => {
    const x: number = window.innerWidth;
    const y: number = window.innerHeight;
    const mX: number = e.clientX;
    const mY: number = e.clientY;

    setColor({
      backgroundColor: `linear-gradient(130deg, rgb(${(200 * mX) / x},${(200 *
        mY) /
        y},200), rgb(${(200 * mY) / y},120,${(200 * x) / mX})), 
        linear-gradient(210deg, rgb(${(200 * mX) / x},${(200 * mY) / y},${(200 *
        mX) /
        x}), rgb(160,${(200 * mY) / y},${(200 * mX) / x})),
          linear-gradient(330deg, rgb(80,${(200 * y) / mY},${(200 * mX) /
        x}), rgb(100,${(200 * mY) / y},${(200 * mX) / x}))`
    });

    console.log("mouse x", mX / x, "mouse y", mY / y);
  };

  const toggleHome = () => {
    if (fade === "fadeIn") {
      setFade("fadeOut");
      setDisplayHome(false);
      return setTimeout(() => setFade("none"), 500);
    } else {
      setFade("fadeIn");
      setDisplayHome(true);
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
        <div style={{ ...backgroundColor }} className="App vh vw fix" />
        <div className="vh vw fix noise border" />

        <div
          className="top right abs my1 mx2 pt05 white o-4 z10"
          onClick={toggleHome}
        >
          {fade === "none" ? "About" : "X"}
        </div>

        <div className="aic jcc f fw p1 yview">
          <div className="gutter px2 fa ac o-4 white">
            {displayHome ? (
              <Home />
            ) : (
              <About style={fade} toggle={toggleHome} />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
