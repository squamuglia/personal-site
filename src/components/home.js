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

const Home = () => {
	return (
		<div className="fadeIn">
			<div className="__headline">
				<h1>
					Max Smouha is a developer{" "}
					<Fader delay={500} time={2000} content={headlines} />
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
	);
};

export default Home;
