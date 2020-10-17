import React, { useState, useEffect, useRef } from 'react';
import { NextPage } from 'next';

const headlines = [
	'who is afraid of horses.',
	'who pod races.',
	"who isn't afraid to say we met on Tinder.",
	'who so random.',
	'who finagles.',
	'who does the madison.',
	'who understands eggs.',
	"who loves the word 'externality'.",
	'who knows a guy.',
	'who can even.',
].sort(() => Math.round(Math.random()));

const Fader: NextPage = () => {
	const fadeRef = useRef(null);
	const [headlineIdx, setHeadline] = useState<number>(0);

	useEffect(() => {
		// adding this style on component mount fixes syncing issue
		if (fadeRef) {
			fadeRef.current.classList = 'loop-fade';
		}

		/* setInterval has a closed scope and doesn't have access to the state, 
    hence `let i`, but we still need to update state to refresh the headline 
    setting the state right here also prevents a funny bug where the first headline repeats twice */
		let i = headlineIdx;
		setHeadline(i++);

		const time = setInterval(() => {
			if (i === headlines.length) {
				i = 0;
			}
			setHeadline(i++);
		}, 3000);

		return () => clearInterval(time);
	}, []);

	return (
		<span className="none" ref={fadeRef}>
			{headlines[headlineIdx]}
		</span>
	);
};

export default Fader;
