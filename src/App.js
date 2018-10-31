import React, { Component } from "react";
import About from "./components/about";
import Home from "./components/home";

class App extends Component {
	state = {
		aboutToggle: false
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

	renderPage = () => {
		if (this.state.aboutToggle) {
			return <About open={this.state.aboutToggle} toggle={this.openAbout} />;
		}
		return <Home />;
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
					<div className="gutter px2 fa ac o-4 white">{this.renderPage()}</div>
				</div>
			</div>
		);
	}
}

export default App;
