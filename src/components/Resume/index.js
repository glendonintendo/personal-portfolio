import React from 'react';

function Resume() {
	return (
		<section className='resume'>
			<div className='resume-link'>
				<p>For a full list of my skills, proficiencies, and experience take a look at my resume.</p>
				<a href={require('../../assets/web-dev-resume.pdf')?.default} target='_blank'>Click here to download!</a>
			</div>
			
			<div className='proficiencies'>
				<h2>Languages</h2>
				<p>JavaScript ES6+, HMTL5, CSS3, SQL, NoSQL, GraphQL, Python</p>
				<h2>Frameworks</h2>
				<p>MongoDB, Express, Node, React, Jest</p>
				<h2>Other Tools</h2>
				<p>MySQL, jQuery, Bootstrap, UIKit, Foundations, Git (Github), Handlebars, Webpack, RESTful and non-RESTful APIs</p>
			</div>
		</section>
	)
};

export default Resume;