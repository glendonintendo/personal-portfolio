import React from 'react';

function Footer() {
	const media = [
		{
			label: "github.com/glendonintendo",
			url: "https://github.com/glendonintendo/",
			icon: "fab fa-github"
		},
		{
			label: "linkedin.com/in/gleneggers/",
			url: "https://www.linkedin.com/in/gleneggers/",
			icon: "fab fa-linkedin"
		},
		{
			label: "instagram.com/gleneggers64",
			url: "https://www.instagram.com/gleneggers64/",
			icon: "fab fa-instagram"
		},
		{
			label: "twitter.com/eggers_glen",
			url: "https://twitter.com/eggers_glen",
			icon: "fab fa-twitter"
		}
	];

	return (
		<>
			<section className='connect'>
				<h2>Want to Connect?</h2>
				<ul>
					{media.map((medium, i) => (
						<li key={i}>
							<a href={medium.url}>
								<i className={medium.icon}></i>
								{medium.label}
							</a>
						</li>
					))}
				</ul>
			</section>
			<footer>
				<p>Created and developed with ❤️ by Glen Eggers</p>
			</footer>
		</>
	)
};

export default Footer;