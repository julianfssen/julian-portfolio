import React, { useState, useEffect } from 'react';
import './assets/main.css';

function PreviewCard({ url }) {
	const [ repoData, setRepoData ] = useState({});

	const repoRequest = new Request(url);

	const getRepos = (request) => {
		fetch(request)
			.then(response => response.json())
			.then(response => {
				setRepoData({
					...repoData, 
					html_url: response.html_url,
					description: response.description,
					name: response.name
				});
			}
		);
	}

	useEffect(() => getRepos(repoRequest), []);

	return (
		<div className='mx-auto rounded-lg w-80 h-32 bg-blue-50 shadow-md'>
			<div className='text-lg font-semibold'>
			  <a 
					href={repoData.html_url}
					target='_blank'
					rel='noreferrer'
				>
					{repoData.name}
				</a>
			</div>
			<div className='text-lg'>{repoData.description}</div>
		</div>
	)
}

export default PreviewCard;
