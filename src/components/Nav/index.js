import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
	return (
		<header>
			<h1><Link to='/'>#glen</Link></h1>
			<nav>
				<ul>
					<li><Link to='/about'>.about</Link></li>
					<li><Link to='/portfolio'>.portfolio</Link></li>
					<li><Link to='/contact'>.contact</Link></li>
					<li>.resume</li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;