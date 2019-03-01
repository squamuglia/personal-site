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

const linksRender = links =>
	links.map(link => (
		<div className="col-25 px075 my1">
			<a href={link.url} target="_blank" rel="noopener noreferrer">
				<h5>{link.name}</h5>
			</a>
			<p className="mt05">{link.desc}</p>
		</div>
	));

export default () => {
	const rando = r => r.sort(() => Math.round(Math.random()) - 1);

	return (
		<div className="fadeIn">
			<div className="__headline">
				<h1>
					Max Smouha is a developer{" "}
					<Fader delay={500} time={2000} content={rando(headlines)} />
				</h1>
			</div>

			<div className="my2">
				<p className="h6 kern">RECENT PROJECTS</p>
			</div>
			<div className="f fw mt1">{linksRender(links)}</div>
			<div className="x left ac mt1 mb2">
				<a href="mailto:maxsmouha@gmail.com">email</a>{" "}
				<a href="https://github.com/squamgulia">git</a>{" "}
				{/* <a href="https://medium.com/@maxsmouha/">medium</a> */}
			</div>
		</div>
	);
};

const links = [
	{
		name: "TriBeCa Art Walk",
		url: "https://www.tribecaarts.org",
		desc: "react, mapbox"
	},
	{ name: "Fridge Freud", url: "http://freud.fun", desc: "react, node" },
	{
		name: "Piano Friend",
		url: "http://pianofriend.cool/",
		desc: "vanilla js"
	},
	{
		name: "WeWork Beer List",
		url: "http://beer.topset.co/",
		desc: "react, rails"
	},
	{ name: "Shreddit", url: "http://shreddit.cool", desc: "rails mvc" },
	{
		name: "Just Add Sauces",
		url: "https://justadd.myshopify.com/",
		desc: "shopify"
	},
	{ name: "Uchu", url: "http://uchu.nyc", desc: "wordpress" },
	{
		name: "Sushi on Jones",
		url: "http://sushionjones.com/",
		desc: "wordpress"
	},
	{
		name: "Net Effective Rent",
		url: "https://squamuglia.github.io/neteffect/",
		desc: "vanilla"
	}
];
