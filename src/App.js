import React, { Component } from 'react';
import Headline from './components/headline';

class App extends Component {
  hoverColor = e => {
    let mouseX;
    let mouseY;
    const stripe = document.getElementById('stripe');
    let x = window.innerWidth;
    let y = window.innerHeight;

    mouseX = e.clientX;
    mouseY = e.clientY;
    console.log('x', mouseX / x, 'y', mouseY / y);

    stripe.style.background = `linear-gradient(130deg, rgb(${(250 * mouseX) /
      x},${(250 * mouseY) / y},250), rgb(${(250 * mouseY) / y},250,${(250 * x) /
      mouseX})), linear-gradient(210deg, rgb(${(250 * mouseX) / x},${(250 *
      mouseY) /
      y},${(250 * mouseX) / x}), rgb(250,${(250 * mouseY) / y},${(250 *
      mouseX) /
      x})),
  linear-gradient(330deg, rgb(200,${(250 * y) / mouseY},${(250 * mouseX) /
      x}), rgb(250,${(250 * mouseY) / y},${(250 * mouseX) / x}))`;
  };

  render() {
    return (
      <React.Fragment>
        <div id="stripe" className="App left right yview abs" />
        <div className="vw vh noise abs border" onMouseMove={this.hoverColor} />
        <div className="aic jcc f fw p1 yview">
          <div className="gutter p2 fa ac o-4 white">
            <Headline />
            <div className="mt2">
              <p className="h6 kern">RECENT PROJECTS</p>
            </div>
            <div className="mt1">
              <a href="http://freud.fun" className="no-underwear">
                Fridge Freud
              </a>{' '}
              —
              <a className="no-underwear" href="http://mmash.herokuapp.com/">
                {' '}
                Monster Mash
              </a>{' '}
              —
              <a className="no-underwear" href="http://pianofriend.cool">
                {' '}
                Piano Friend
              </a>{' '}
              —
              <a className="no-underwear" href="http://beer.topset.co">
                {' '}
                WeWork Beer List
              </a>{' '}
              —
              <a className="no-underwear" href="http://www.shreddit.cool">
                {' '}
                Shreddit
              </a>
            </div>
            <div className="x left ac my1">
              <a href="mailto:maxsmouha@gmail.com">email</a>{' '}
              <a href="https://github.com/squamgulia">git</a>{' '}
              <a href="https://medium.com/@maxsmouha/">medium</a>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
