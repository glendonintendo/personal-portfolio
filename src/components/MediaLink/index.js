import React from 'react';

function MediaLink(props) {
	const {label, url, icon } = props.mediaData
	
	return (
		<li>
			<a href={url}>
				<i className={icon}></i>
				{label}
			</a>
		</li>
	);
};

export default MediaLink;