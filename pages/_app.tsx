import React, { useEffect } from 'react';
import NavLink from '../components/navlink';
import Head from 'next/head';
import { NextPage } from 'next';
import { PageTransition } from 'next-page-transitions';
import '../styles/index.css';
import { useRouter } from 'next/router';

interface Props {
	Component: NextPage;
	pageProps: any;
}

const App = ({ Component, pageProps }: Props) => {
	useEffect(() => {
		console.log('Hi, welcome.');
	}, []);

	const router = useRouter();

	return (
		<>
			<Head>
				<title>Max Smouha - Developer, Friend</title>
			</Head>

			<div className="vh vw fix" />
			<div className="vh vw fix noise border" />

			<div className="nav f jcb top right abs my1 px2 pt05 o-4 z10 pointer">
				<NavLink href="/">Projects</NavLink>
				<NavLink href="/about">About</NavLink>
				<a href="mailto:maxsmouha@gmail.com">Email</a>
				<a
					href="https://github.com/squamgulia"
					target="_blank"
					rel="noopener noreferrer"
				>
					Git
				</a>
			</div>

			<div className="aic jcc f fw p1 yview">
				<div className="container-m fa o-4">
					<PageTransition timeout={500} classNames="page-transition">
						<Component {...pageProps} key={router.route} />
					</PageTransition>
				</div>
			</div>
		</>
	);
};

export default App;
