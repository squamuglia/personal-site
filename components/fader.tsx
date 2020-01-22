import React, { useState, useEffect } from "react";
import { NextPage } from "next";

const headlines = [
  "who is afraid of horses.",
  "who pod races.",
  "who isn't afraid to say we met on Tinder.",
  "who so random.",
  "who finagles.",
  "who does the madison.",
  "who understands eggs.",
  "who loves the word 'externality'.",
  "who knows a guy.",
  "who can even."
];

const Fader: NextPage = () => {
  let fadeRef;
  const [headlineIdx, setHeadline] = useState<number>(0);

  useEffect(() => {
    // adding this style on component mount fixes syncing issue
    if (fadeRef) {
      fadeRef.classList = "loop-fade";
    }

    // randomize headlines on component mount
    headlines.sort(() => Math.round(Math.random()));

    /* setInterval has a closed scope and doesn't have access to the state, 
    hence `let i`, but we still need to update state to refresh the headline 
    setting the state right here also prevents a funny bug where the first headline repeats twice */
    let i = headlineIdx;
    setHeadline(i++);

    const time = setInterval(() => {
      if (i === headlines.length) {
        i = 0;
      }
      setHeadline(i++);
    }, 3000);

    return () => clearInterval(time);
  }, []);

  return (
    <span className="none" ref={node => (fadeRef = node)}>
      {headlines[headlineIdx]}
    </span>
  );
};

export default Fader;
