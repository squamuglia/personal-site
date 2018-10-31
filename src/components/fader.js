import React, { Component } from "react";

class Fader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentHeadline: "who loads his own sites"
		};

		this.headRef = React.createRef();
	}

	componentWillMount() {
		const t = this.props.time;
		const d = this.props.delay;

		setTimeout(() => {
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

		this.fader = setTimeout(() => {
			setInterval(() => {
				this.headRef.current.classList = "fadeOut";
			}, t);
		}, t - d);
	}

	componentWillUnmount() {
		clearInterval(this.interval, this.fader);
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
