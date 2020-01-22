import React, { useState, useEffect } from "react";
import { NextPage } from "next";

const headlines = [
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
].sort(() => Math.round(Math.random()));

const Fader: NextPage = () => {
  let fadeRef;
  let [headlineIdx, setHeadline] = useState<number>(0);

  useEffect(() => {
    if (fadeRef) {
      //adding this style on component mount seems to fix syncing issue
      fadeRef.classList = "loop-fade";
    }

    const time = setInterval(() => {
      headlineIdx === headlines.length - 1
        ? setHeadline(0)
        : setHeadline(headlineIdx++);
    }, 3000);

    return () => clearInterval(time);
  }, []);

  console.log(headlines);
  return (
    <span className="none" ref={node => (fadeRef = node)}>
      {headlines[headlineIdx]}
    </span>
  );
};

export default Fader;

// console.log("hi: ", headlineIdx);
// console.log(headlineIdx === headlines.length);
// console.log("update: ", headlineIdx + 1);
// console.log("current: ", headlines[headlineIdx]);
