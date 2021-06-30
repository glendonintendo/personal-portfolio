import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
	const checkActive = (match, location) => {
		if (location.pathname !== '/portfolio' && location.pathname !== '/contact') {
			return true;
		} else {
			return false;
		}
	};
	
	return (
		<header>
			<h1><Link to='/'>#glen</Link></h1>
			<nav>
				<ul>
					<li><NavLink to='/about' activeClassName='nav-selected' isActive={checkActive}>.about</NavLink></li>
					<li><NavLink to='/portfolio' activeClassName='nav-selected'>.portfolio</NavLink></li>
					<li><NavLink to='/contact' activeClassName='nav-selected'>.contact</NavLink></li>
					<li><a href={require('../../assets/web-dev-resume.pdf')?.default} target='_blank'>.resume</a></li>
				</ul>
			</nav>
		</header>
	);
};

export default Nav;