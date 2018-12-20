import React, { Component } from "react";

class Fader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			currentHeadline: null
		};

		this.node = React.createRef();
	}

	componentDidMount() {
		const t = this.props.time;
		const d = this.props.delay;

		this.tA = setTimeout(() => {
			this.node.current.classList = "fadeOut";
		}, t - d);

		let i = -1;
		this.interval = setInterval(() => {
			this.node.current.classList = "fadeIn";
			i < this.props.content.length - 1 ? (i = i + 1) : (i = 0);
			this.setState({
				...this.state,
				currentHeadline: this.props.content[i]
			});
		}, t);

		this.tB = setTimeout(() => {
			this.fader = setInterval(() => {
				this.node.current.classList = "fadeOut";
			}, t);
		}, t - d);
	}

	componentWillUnmount() {
		clearInterval(this.interval);
		clearInterval(this.fader);
		clearTimeout(this.tA);
		clearTimeout(this.tB);
	}

	render() {
		return (
			<span ref={this.node} className="fadeIn">
				{this.state.currentHeadline}
			</span>
		);
	}
}

export default Fader;
