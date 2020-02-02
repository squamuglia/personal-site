import React, { MouseEvent } from 'react';
import { useRouter } from 'next/router';
import cx from 'classnames';

interface Props {
	href: string;
	style?: string;
	children?: any;
}

const NavLink = ({ href, style, children }: Props) => {
	const router = useRouter();
	const disabled: boolean = router.pathname === href;

	const handleClick = (e: MouseEvent) => {
		e.preventDefault();

		if (!disabled) {
			router.push(href);
		}
	};

	return (
		<span className={cx(style, { disabled: disabled })}>
			<a href={href} onClick={handleClick}>
				{children}
			</a>
		</span>
	);
};

export default NavLink;
