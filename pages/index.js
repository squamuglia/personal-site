import React, { useState } from "react";
import About from "../components/about";
import Home from "../components/home";
import "../styles/index.css";
import Head from "next/head";

export default () => {
  const [fade, changeDisplayAbout] = useState("none");
  const [displayHome, toggleHome] = useState(true);
  const [backgroundColor, changeColor] = useState({ backgroundColor: "blue" });

  const hoverColor = e => {
    const x = window.innerWidth;
    const y = window.innerHeight;
    const mX = e.clientX;
    const mY = e.clientY;

    // console.log("mouse x", mX / x, "mouse y", mY / y);

    changeColor({
      backgroundColor: `linear-gradient(130deg, rgb(${(200 * mX) / x},${(200 *
        mY) /
        y},200), rgb(${(200 * mY) / y},120,${(200 * x) / mX})), 
			linear-gradient(210deg, rgb(${(200 * mX) / x},${(200 * mY) / y},${(200 * mX) /
        x}), rgb(160,${(200 * mY) / y},${(200 * mX) / x})),
			linear-gradient(330deg, rgb(80,${(200 * y) / mY},${(200 * mX) /
        x}), rgb(100,${(200 * mY) / y},${(200 * mX) / x}))`
    });

    console.log(backgroundColor);
  };

  const toggleAbout = () => {
    if (displayAbout === "fadeIn") {
      changeDisplayAbout("fadeOut");
      toggleHome(false);
      return setTimeout(() => changeDisplayAbout("none"), 500);
    } else {
      changeDisplayAbout("fadeIn");
      toggleHome(true);
    }
  };

  return (
    <>
      <Head>
        <meta charset="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="I build friendly things in React, Node, WordPress & Shopify"
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
          onClick={toggleAbout}
        >
          {displayAbout === "none" ? "About" : "X"}
        </div>

        <div className="aic jcc f fw p1 yview">
          <div className="gutter px2 fa ac o-4 white">
            <About style={displayAbout} toggle={toggleAbout} />
            <Home style={displayHome ? { display: "none" } : null} />
          </div>
        </div>
      </div>
    </>
  );
};
