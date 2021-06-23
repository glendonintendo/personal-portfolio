import React from 'react';

function Project(props) {
	const { title, deployedUrl, image } = props.projectData;

	return (
		<article className='project'>
			<a className='project-title' href={deployedUrl}><h3>{title}</h3></a>
			<a href={deployedUrl}>
				<img 
					className='project-pic' 
					src={require(`../../assets/${image}`)?.default}
					alt={title}
					key={title}
				/>
			</a>
		</article>
	)
}

export default Project;