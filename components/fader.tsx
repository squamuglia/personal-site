import React, { useState, useEffect, useRef } from 'react';
import { NextPage } from 'next';

const headlines = [
  'who is afraid of horses.',
  'who pod races.',
  "who isn't afraid to say we met on Tinder.",
  'who so random.',
  'who finagles.',
  'who does the madison.',
  'who understands eggs.',
  "who loves the word 'externality'.",
  'who knows a guy.',
  'who can even.',
].sort(() => Math.round(Math.random()));

const Fader: NextPage = () => {
  const fadeRef = useRef(null);
  const [headlineIdx, setHeadline] = useState<number>(0);

  useEffect(() => {
    if (!fadeRef) return;

    fadeRef.current.classList = 'loop fade-in';

    const timeout = setTimeout(() => {
      setHeadline(headlineIdx === headlines.length - 1 ? 0 : headlineIdx + 1);
    }, 3000);

    const fadeIn = setTimeout(() => {
      fadeRef.current.classList = 'loop';
    }, 1000);

    const fadeOut = setTimeout(() => {
      fadeRef.current.classList = 'loop fade-out';
    }, 2000);

    return () => {
      clearTimeout(timeout);
      clearTimeout(fadeIn);
      clearTimeout(fadeOut);
    };
  }, [headlineIdx, setHeadline, fadeRef]);

  return (
    <span className="none" ref={fadeRef}>
      {headlines[headlineIdx]}
    </span>
  );
};

export default Fader;
