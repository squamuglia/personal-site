import React from 'react';

const headlines = [
  'is afraid of horses',
  'loves a good lentil',
  `isn't afraid to say we met on tinder`,
  'so random',
  'finagles',
  'does the madison',
  'understands eggs',
  "loves the word 'externality'",
  'knows a guy who knows a guy',
  'can even'
];

const randomHeadline = () =>
  headlines[Math.floor(Math.random() * headlines.length)];

const nextRando = () => {
  setInterval(
    () => (document.getElementById('headline').innerHTML = randomHeadline()),
    2000
  );
};
nextRando();

const Headline = () => {
  return (
    <div className="__headline">
      <h1 className="mb1">
        Max Smouha is a developer who{' '}
        <span id="headline">{randomHeadline()}</span>.
      </h1>
    </div>
  );
};

export default Headline;
