import React from 'react';

function About() {
	return (
		<section id='about' className='about'>
			<img 
				className='profile-pic' 
				src={require('../../assets/profile-pic.jpg')?.default}
				alt='profile of Glen'	
			/>
			<div className='about-text'>
				<h2>Hello, I'm Glen</h2>
				<p>
					I am a full stack web developer currently based in Austin, TX.
					<br /> <br />
					I develop powerful, single-page, progressive web applications using the MongoDB, Express, React, Node (MERN) tech stack.
                	<br /> <br />
                	I want to work with you to create beautiful, responsive applications that both fit your organization's needs and exceed your expectations.
				</p>
			</div>
		</section>
	)
}

export default About;