import React, { useState, useEffect } from "react";

// const rando = r => r.sort(() => Math.round(Math.random()) - 1);

let headlines = [
  "who is afraid of horses.",
  "who pod races.",
  `who isn't afraid to say we met on Tinder.`,
  "who so random.",
  "who finagles.",
  "who does the madison.",
  "who understands eggs.",
  "who loves the word 'externality'.",
  "who knows a guy.",
  "who can even."
].sort(() => Math.round(Math.random()) - 1);

const Fader = () => {
  let [headlineIdx, setHeadline] = useState(0);

  useEffect(() => {
    const time = setInterval(() => {
      headlineIdx < headlines.length - 1
        ? setHeadline(headlineIdx => headlineIdx + 1)
        : setHeadline(0);
    }, 3000);

    return () => clearInterval(time);
  }, []);

  return <span className="loop-fade">{headlines[headlineIdx]}</span>;
};

export default Fader;
