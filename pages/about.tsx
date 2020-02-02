import React from 'react';
import { NextPage } from 'next';

const About: NextPage = () => (
	<div className="abs top left x y f aic jcc p1 z10">
		<div className="container-sm">
			<div className="round mxa mb1 __me" />
			<h3 className="ac">Hi, it's me.</h3>
			<div className="aj px2">
				<p>
					I'm a front-end developer based in Brooklyn with an eye for design and
					product. I build friendly things in React, Node, Shopify, {'&'} more.
				</p>
				<p>
					I currently work at{' '}
					<a
						href="https://www.simplehealth.com/"
						target="_blank"
						rel="noopener noreferrer"
					>
						Simple Health
					</a>{' '}
					where we make birth control affordable and accessible online.
				</p>
				<p>
					I like working on fun projects, especially when they exploit
					surprising sensory phenomena. My interests include VR, Video Chat, SMS
					and experiential design.
				</p>
				<p>
					If you'd like to collaborate,{' '}
					<a href="mailto:maxsmouha@gmail.com">email me</a>, or just feel a
					sense of satisfaction from knowing you could contact me at any time.
				</p>
				<p>This site was built with Next, for fun!</p>
			</div>
		</div>
	</div>
);

export default About;
