import React from 'react';
import './assets/main.css';

function PreviewCard({ url }) {
	const request = new Request(url);

	const getRepos = (url) => {
		fetch(url)
			.then(response => response.json())
			.then(response => {
        console.log('github response', response)
			}
		);
	}

	getRepos(request);

	return (
		<div className='mx-auto rounded-lg w-80 h-32 bg-blue-50 shadow-md'>
			<div className='text-lg'></div>
		</div>
	)
}

export default PreviewCard;
