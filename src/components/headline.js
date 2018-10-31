import React, { Component } from "react";

class Headline extends Component {
	constructor(props) {
		super(props);
		this.state = {
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
			],
			currentHeadline: "..."
		};

		this.headRef = React.createRef();
	}
	componentDidMount() {
		console.log("mounted");
		let i = -1;
		this.interval = setInterval(() => {
			i < this.state.headlines.length - 1 ? (i = i + 1) : (i = 0);
			this.setState({
				...this.state,
				currentHeadline: this.state.headlines[i]
			});

			this.headRef.current.classList = "fadeIn";
			console.log("fadeIn");
		}, 2000);

		this.fader = setTimeout(() => {
			setInterval(() => {
				this.headRef.current.classList = "fadeOut";
				console.log("fadeOut");
			}, 2000);
		}, 1500);

		setInterval(() => {
			console.log(".5s");
		}, 500);
	}
	componentWillUnmount() {
		clearInterval(this.interval, this.fader);
	}

	render() {
		return (
			<div className="__headline">
				<h1 className="mb1">
					Max Smouha is a developer{" "}
					<span id="headline" ref={this.headRef} className="fadeIn">
						{this.state.currentHeadline}
					</span>
				</h1>
			</div>
		);
	}
}

export default Headline;
