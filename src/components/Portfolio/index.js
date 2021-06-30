import React from 'react';

function Portfolio() {
	const projects = [
		{
			title: "Deep Thoughts",
			deployedUrl: "https://warm-depths-82390.herokuapp.com/",
			githubUrl: "https://github.com/glendonintendo/deep-thoughts",
			image: "deep-thoughts-homepage.png"
		},
		{
			title: "Music Market",
			deployedUrl: "https://stark-citadel-98109.herokuapp.com/",
			githubUrl: "https://github.com/glendonintendo/music-market",
			image: "music-market.png"
		},
		{
			title: "Budget Tracker",
			deployedUrl: "https://warm-thicket-03703.herokuapp.com/",
			githubUrl: "https://github.com/glendonintendo/budget-tracker",
			image: "budget-tracker.png"
		},
		{
			title: "Note Taker",
			deployedUrl: "https://young-sierra-98103.herokuapp.com/",
			githubUrl: "https://github.com/glendonintendo/note-taker",
			image: "note-taker.png"
		},
		{
			title: "Tech Blog",
			deployedUrl: "https://sheltered-springs-07581.herokuapp.com/",
			githubUrl: "https://github.com/glendonintendo/tech-blog",
			image: "tech-blog-dashboard.png"
		},
		{
			title: "Pizza Hunt",
			deployedUrl: "https://young-hollows-44139.herokuapp.com/",
			githubUrl: "https://github.com/glendonintendo/pizza-hunt",
			image: "pizza-hunt.png"
		},
		{
			title: "National Park Finder",
			deployedUrl: "https://glendonintendo.github.io/national-park-finder/",
			githubUrl: "https://github.com/glendonintendo/national-park-finder",
			image: "national-park-finder.png"
		}
	];


	return (
		<div className='flex-projects'>
			{projects.map((project, i) => (
				<article className='project' key={i}>
					<p><a className='italic-hover' href={project.deployedUrl}>{project.title}</a> - <a className='italic-hover' href={project.githubUrl}>source code</a></p>
					<a href={project.deployedUrl}>
						<img 
							className='project-pic' 
							src={require(`../../assets/${project.image}`)?.default}
							alt={project.title}
							key={project.title}
						/>
					</a>
				</article>
			))}
		</div>
	)
}

export default Portfolio;