import React from "react";
import Fader from "./fader";

const headlines = [
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
];

const links = {
	"Fridge Freud": "http://freud.fun",
	Serhant: "http://serhant.com",
	"Monster Mash": "#",
	"Piano Friend": "#",
	"WeWork Beer List": "#",
	Shreddit: "#",
	"Just Add Sauces": "#",
	Uchu: "#",
	"Sushi on Jones": "#",
	"Serhant Team": "#",
	"Net Effective Rent": "#"
};

const Home = () => {
	const rando = r => r.sort(() => Math.round(Math.random()) - 1);

	return (
		<div className="fadeIn">
			<div className="__headline">
				<h1>
					Max Smouha is a developer{" "}
					<Fader delay={500} time={2000} content={rando(headlines)} />
				</h1>
			</div>

			<div className="mt2">
				<p className="h6 kern">RECENT PROJECTS</p>
			</div>
			<ul className="mt1">
				{Object.keys(links).map(link => (
					<li className="inline-block mx1">
						<a href={links[link]} target="_blank" rel="noopener noreferrer">
							{link}
						</a>
					</li>
				))}
			</ul>
			<div className="x left ac mt1 mb2">
				<a href="mailto:maxsmouha@gmail.com">email</a>{" "}
				<a href="https://github.com/squamgulia">git</a>{" "}
				<a href="https://medium.com/@maxsmouha/">medium</a>
			</div>
		</div>
	);
};

export default Home;
