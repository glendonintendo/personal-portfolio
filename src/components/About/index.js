import React from 'react';

function About() {
	return (
		<section id='about' className='about'>
			<img 
				className='profile-pic' 
				src={require('../../assets/profile-pic.jpg')?.default}
				alt='profile of Glen'	
			/>
			<div calss='about-text'>
				<h2>Hello, I'm Glen</h2>
				<p>
					I am a full stack web developer currently based in Austin, TX.
					<br /> <br />
					I develop applications using HTML(5), CSS(3), Javascript, and JQuery. I also have experience managing databases with SQL and developing powerful single-use programs with Python.
                	<br /> <br />
                	I want to work with you to create beautiful, responsive applications that both fit your organization's needs and exceed your expectations.
				</p>
			</div>
		</section>
	)
}

export default About;