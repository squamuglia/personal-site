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

		console.log("mouse x", mX / x, "mouse y", mY / y);

		this.colorBg.style.background = `
			linear-gradient(130deg, rgb(${(200 * mX) / x},${(200 * mY) /
			y},200), rgb(${(200 * mY) / y},120,${(200 * x) / mX})), 

			linear-gradient(210deg, rgb(${(200 * mX) / x},${(200 * mY) / y},${(200 * mX) /
			x}), rgb(160,${(200 * mY) / y},${(200 * mX) / x})),

			linear-gradient(330deg, rgb(80,${(200 * y) / mY},${(200 * mX) /
			x}), rgb(100,${(200 * mY) / y},${(200 * mX) / x}))
			`;
	};

	toggleAbout = () => {
		if (this.state.toggleAbout === "fadeIn") {
			this.setState({ toggleAbout: "fadeOut" });
			return setTimeout(() => this.setState({ toggleAbout: "none" }), 500);
		} else {
			this.setState({ toggleAbout: "fadeIn" });
		}
	};

	render() {
		return (
			<div className="slowFade" onMouseMove={this.hoverColor}>
				<div
					ref={colorBg => (this.colorBg = colorBg)}
					className="App vh vw fix"
				/>
				<div className="vh vw fix noise border" />
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
