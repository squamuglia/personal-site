import React, { Component } from "react";
import Fader from "./components/fader";
import About from "./components/about";

class App extends Component {
	state = {
		aboutToggle: false,
		headlines: [
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
		]
	};

	hoverColor = e => {
		let mouseX;
		let mouseY;
		const stripe = document.getElementById("stripe");
		let x = window.innerWidth;
		let y = window.innerHeight;

		mouseX = e.clientX;
		mouseY = e.clientY;
		console.log("your mouse's x", mouseX / x, "your mouse's y", mouseY / y);

		stripe.style.background = `linear-gradient(130deg, rgb(${(250 * mouseX) /
			x},${(250 * mouseY) / y},200), rgb(${(250 * mouseY) / y},120,${(250 * x) /
			mouseX})), linear-gradient(210deg, rgb(${(250 * mouseX) / x},${(250 *
			mouseY) /
			y},${(250 * mouseX) / x}), rgb(160,${(250 * mouseY) / y},${(250 *
			mouseX) /
			x})),
  linear-gradient(330deg, rgb(80,${(250 * y) / mouseY},${(250 * mouseX) /
			x}), rgb(100,${(250 * mouseY) / y},${(250 * mouseX) / x}))`;
	};

	openAbout = () => {
		this.setState({
			aboutToggle: !this.state.aboutToggle
		});
	};

	showAbout = show => {
		if (show) {
			return "X";
		} else {
			return "About";
		}
	};

	render() {
		console.log("hi!");
		return (
			<div className="slowFade">
				<div id="stripe" className="App vh vw fix" />
				<div className="vh vw fix noise border" onMouseMove={this.hoverColor} />
				<div
					className="top right abs my1 mx2 pt05 white o-4 z10"
					onClick={this.openAbout}
				>
					{this.showAbout(this.state.aboutToggle)}
				</div>
				<div className="aic jcc f fw p1 yview">
					<div className="gutter px2 fa ac o-4 white">
						<About open={this.state.aboutToggle} toggle={this.openAbout} />
						<div className="__headline">
							<h1>
								Max Smouha is a developer{" "}
								<Fader delay={500} time={2000} content={this.state.headlines} />
							</h1>
						</div>

						<div className="mt2">
							<p className="h6 kern">RECENT PROJECTS</p>
						</div>
						<div className="mt1">
							<a
								href="http://freud.fun"
								className="no-underwear"
								target="_blank"
								rel="noopener noreferrer"
							>
								Fridge Freud
							</a>{" "}
							—
							<a
								className="no-underwear"
								href="http://mmash.herokuapp.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Monster Mash
							</a>{" "}
							—
							<a
								className="no-underwear"
								href="http://pianofriend.cool"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Piano Friend
							</a>{" "}
							—
							<a
								className="no-underwear"
								href="http://beer.topset.co"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								WeWork Beer List
							</a>{" "}
							—
							<a
								className="no-underwear"
								href="http://www.shreddit.cool"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Shreddit
							</a>{" "}
							—
							<a
								className="no-underwear"
								href="https://justadd.myshopify.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Just Add Sauces
							</a>{" "}
							—
							<a
								className="no-underwear"
								href="http://uchu.nyc/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Uchu
							</a>{" "}
							—
							<a
								className="no-underwear"
								href="http://sushionjones.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Sushi on Jones
							</a>{" "}
							—
							<a
								className="no-underwear"
								href="http://serhantteam.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Serhant Team
							</a>{" "}
							—
							<a
								className="no-underwear"
								href="https://squamuglia.github.io/neteffect/"
								target="_blank"
								rel="noopener noreferrer"
							>
								{" "}
								Net Effective Rent
							</a>
						</div>
						<div className="x left ac mt1 mb2">
							<a href="mailto:maxsmouha@gmail.com">email</a>{" "}
							<a href="https://github.com/squamgulia">git</a>{" "}
							<a href="https://medium.com/@maxsmouha/">medium</a>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default App;
