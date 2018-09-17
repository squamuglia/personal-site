import React from 'react';

const headlines = [
  'who is afraid of horses.',
  'who pod races.',
  `who isn't afraid to say we met on Tinder.`,
  'who so random.',
  'who finagles.',
  'who does the madison.',
  'who understands eggs.',
  "who loves the word 'externality'.",
  'who knows a guy.',
  'who can even.'
];

const nextHeadline = () => {
  let i = -1;
  setInterval(() => {
    i < headlines.length - 1 ? (i = i + 1) : (i = 0);
    document.getElementById('headline').innerHTML = headlines[i];
  }, 2000);
};

const Headline = () => {
  return (
    <div className="__headline">
      <h1 className="mb1">
        Max Smouha is a developer <span id="headline">{nextHeadline()}</span>
      </h1>
    </div>
  );
};

export default Headline;
