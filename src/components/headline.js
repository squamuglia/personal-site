import React, { Component } from 'react';

class Headline extends Component {
  state = {
    headlines: [
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
    ],
    currentHeadline: null
  };

  // nextHeadline = () => {
  //   let i = -1;
  //   setInterval(() => {
  //     i < this.state.headlines.length - 1 ? (i = i + 1) : (i = 0);
  //     document.getElementById('headline').innerHTML = this.state.headlines[i];
  //   }, 2000);
  // };

  componentWillMount() {
    let i = -1;
    this.interval = setInterval(() => {
      i < this.state.headlines.length - 1 ? (i = i + 1) : (i = 0);
      this.setState({
        ...this.state,
        currentHeadline: this.state.headlines[i]
      });
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <div className="__headline">
        <h1 className="mb1">
          Max Smouha is a developer{' '}
          <span id="headline">{this.state.currentHeadline}</span>
        </h1>
      </div>
    );
  }
}

export default Headline;
