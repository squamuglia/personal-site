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
						<p className="my05">{link.desc}</p>
						<p className="mt05">{link.stack}</p>
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
	desc: string;
	stack: string;
}> = [
	{
		name: 'Simple Health',
		url: 'https://www.simplehealth.com/birth-control/get-birth-control-online',
		desc: '',
		stack: 'react, flow, express, apollo, mysql',
	},
	{
		name: 'Pipsqk',
		url: 'https://pipsqk.co',
		desc: `Coming soon. Pipsqk let's users subscribe to paid text feeds from content creators.`,
		stack: 'nextjs, typescript, mysql, twilio, serverless',
	},
	{
		name: 'TriBeCa Art Walk',
		url: 'https://www.tribecaarts.org',
		desc: '',
		stack: 'nextjs, typescript, mapbox',
	},
	{
		name: 'Fridge Freud',
		url: 'https://freud.fun',
		desc: `My first react app. Build a psychological profile through and receive restaurant recommendations from Yelp`,
		stack: 'react, node',
	},
	{
		name: 'Net Effective Rent',
		url: 'https://squamuglia.github.io/neteffect/',
		desc: '',
		stack: 'vanilla js',
	},
];
