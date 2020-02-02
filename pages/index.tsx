import React, { useState, MouseEvent } from 'react';
import Fader from '../components/fader';
import { NextPage } from 'next';

const Home: NextPage = () => {
	const [showNotes, setShowNotes] = useState<boolean>(false);
	const [mousePosition, setMousePosition] = useState<{
		left: number;
		top: number;
	}>({ left: 0, top: 0 });

	const trackPosition = (e: MouseEvent) =>
		setMousePosition({ left: e.clientX, top: e.clientY });

	return (
		<>
			<div className="__headline">
				<h1>
					Max Smouha is a developer <Fader />
				</h1>
			</div>

			<h6 className="h6 kern my2 mxa pointer">
				VAGUELY RECENT PROJECTS{' '}
				<sup
					onMouseMove={trackPosition}
					onMouseOver={() => setShowNotes(true)}
					onMouseOut={() => setShowNotes(false)}
				>
					1
				</sup>
			</h6>

			<div className="f fw mt1 jcc">
				{links.map((link, i) => (
					<div className="col-33 px075 my1" key={i}>
						<a href={link.url} target="_blank" rel="noopener noreferrer">
							<h5>{link.name}</h5>
						</a>
						<p className="mt05">{link.desc}</p>
					</div>
				))}
			</div>

			<div className="x ac mt2">
				<a href="mailto:maxsmouha@gmail.com" className="mr2">
					email
				</a>
				<a
					href="https://github.com/squamgulia"
					target="_blank"
					rel="noopener noreferrer"
				>
					git
				</a>
			</div>

			{showNotes && (
				<div style={mousePosition} className="abs al p1 tooltip">
					A collection of extant work.
				</div>
			)}
		</>
	);
};

export default Home;

const links: Array<{
	name: string;
	url: string;
	desc: string;
}> = [
	{
		name: 'Simple Health',
		url: 'https://www.simplehealth.com/birth-control/get-birth-control-online',
		desc: 'react, gql'
	},
	{
		name: 'Recreo',
		url: 'https://recreosanmiguel.com/',
		desc: 'shopify'
	},

	{
		name: 'Fridge Freud',
		url: 'https://freud.fun',
		desc: 'react, node'
	},
	{
		name: 'TriBeCa Art Walk',
		url: 'https://www.tribecaarts.org',
		desc: 'react, mapbox'
	},
	{
		name: 'Net Effective Rent',
		url: 'https://squamuglia.github.io/neteffect/',
		desc: 'vanilla js'
	}
];
