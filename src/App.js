import React, { Component } from "react";
import About from "./components/about";
import Home from "./components/home";

class App extends Component {
	state = { toggleAbout: "none" };

	hoverColor = e => {
		const x = window.innerWidth;
		const y = window.innerHeight;
		const mX = e.clientX;
		const mY = e.clientY;
		const stripe = document.getElementById("stripe");

		// console.log("your mouse's x", mX / x, "your mouse's y", mY / y);

		stripe.style.background = `
			linear-gradient(130deg, rgb(${(250 * mX) / x},${(250 * mY) /
			y},200), rgb(${(250 * mY) / y},120,${(250 * x) / mX})), 

			linear-gradient(210deg, rgb(${(250 * mX) / x},${(250 * mY) / y},${(250 * mX) /
			x}), rgb(160,${(250 * mY) / y},${(250 * mX) / x})),

			linear-gradient(330deg, rgb(80,${(250 * y) / mY},${(250 * mX) /
			x}), rgb(100,${(250 * mY) / y},${(250 * mX) / x}))
			`;
	};

	// toggle = () => this.setState({ toggle: !this.state.toggle });

	toggleAbout = () => {
		if (this.state.toggleAbout === "fadeIn") {
			this.setState({ toggleAbout: "fadeOut" });
			return setTimeout(() => this.setState({ toggleAbout: "none" }), 500);
		} else {
			this.setState({ toggleAbout: "fadeIn" });
		}
	};

	render() {
		console.log("hi!", this.state.toggleAbout);
		return (
			<div className="slowFade">
				<div id="stripe" className="App vh vw fix" />
				<div className="vh vw fix noise border" onMouseMove={this.hoverColor} />
				<div
					className="top right abs my1 mx2 pt05 white o-4 z10"
					onClick={this.toggleAbout}
				>
					{this.state.toggleAbout === "none" ? "About" : "X"}
				</div>
				<div className="aic jcc f fw p1 yview">
					<div className="gutter px2 fa ac o-4 white">
						<About
							aboutClass={this.state.toggleAbout}
							toggle={this.toggleAbout}
						/>
						<Home style={this.state.toggle ? { display: "none" } : null} />
					</div>
				</div>
			</div>
		);
	}
}

export default App;
