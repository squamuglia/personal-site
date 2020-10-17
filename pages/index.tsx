import React, { useState, MouseEvent, useEffect } from 'react';
import Fader from '../components/fader';
import { NextPage } from 'next';

const Home: NextPage = () => {
	return (
		<>
			<div className="__headline">
				<h1>
					Max Smouha is a developer <Fader />
				</h1>
			</div>

			<h6 className="h6 kern my2 mxa">RECENT &amp; NOT SO RECENT PROJECTS</h6>

			<div className="mt1">
				{links.map((link, i) => (
					<div className="my1" key={i}>
						<a href={link.url} target="_blank" rel="noopener noreferrer">
							<h5>{link.name}</h5>
						</a>
						<p className="mt05">{link.stack}</p>
						<p className="mt05">{link.desc}</p>
					</div>
				))}
			</div>
		</>
	);
};

export default Home;

const links: Array<{
	name: string;
	url: string;
	stack: string;
	desc: string;
}> = [
	{
		name: 'Simple Health',
		url: 'https://www.simplehealth.com/birth-control/get-birth-control-online',
		stack: 'react, express, apollo, mysql',
		desc: '',
	},
	{
		name: 'Pipsqk',
		url: 'https://pipsqk.co',
		stack: 'nextjs, react, mysql, twilio, serverless',
		desc: '',
	},
	{
		name: 'Fridge Freud',
		url: 'https://freud.fun',
		stack: 'react, node',
		desc: '',
	},
	{
		name: 'TriBeCa Art Walk',
		url: 'https://www.tribecaarts.org',
		stack: 'nextjs, mapbox',
		desc: '',
	},
	{
		name: 'Net Effective Rent',
		url: 'https://squamuglia.github.io/neteffect/',
		stack: 'vanilla js',
		desc: '',
	},
];
