import React from 'react';

const headlines = [
  'is afraid of horses',
  'loves fava beans',
  `isn't afraid to say we met on tinder`,
  'speaks softly and carries a big shtick',
  'so random',
  'finagles',
  'does the madison',
  'understands eggs',
  'lives at 182 Kosciuszko get at me'
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
    <React.Fragment>
      <h1 className="mb1">
        Max Smouha is a developer who{' '}
        <span id="headline">{randomHeadline()}</span> .
      </h1>
    </React.Fragment>
  );
};

export default Headline;
