import React, { Component } from "react";

class Fader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentHeadline: this.props.content[
				Math.random() * this.props.content.length - 1
			]
		};

		this.headRef = React.createRef();
	}

	componentDidMount() {
		const t = this.props.time;
		const d = this.props.delay;

		this.timerA = setTimeout(() => {
			this.headRef.current.classList = "fadeOut";
		}, t - d);

		let i = -1;
		this.interval = setInterval(() => {
			this.headRef.current.classList = "fadeIn";
			i < this.props.content.length - 1 ? (i = i + 1) : (i = 0);
			this.setState({
				...this.state,
				currentHeadline: this.props.content[i]
			});
		}, t);

		this.timerB = setTimeout(() => {
			this.fader = setInterval(() => {
				this.headRef.current.classList = "fadeOut";
			}, t);
		}, t - d);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		clearInterval(this.fader);
		clearTimeout(this.timerA);
		clearTimeout(this.timerB);
	}

	render() {
		return (
			<span ref={this.headRef} className="fadeIn">
				{this.state.currentHeadline}
			</span>
		);
	}
}

export default Fader;
