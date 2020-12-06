import React, { useState, useEffect } from 'react';
import './assets/main.css';

function PreviewCard({ url, demo_url }) {
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
		<div className='mx-auto rounded-lg w-80 h-36 shadow-md bg-gray-700 pt-2'>
			<div className='text-2xl font-semibold hover:text-red-700'>
			  <a 
					href={repoData.html_url}
					target='_blank'
					rel='noreferrer'
				>
					{repoData.name}
				</a>
			</div>
			<div className='text-base mt-2'>{repoData.description}</div>
			<div className='text-base mt-2 font-semibold hover:text-red-700'>{demo_url ? 
			  <a 
				  href='https://mockoverflow.herokuapp.com/'
				>
					mockoverflow.herokuapp.com
				</a> 
			  : ''
				}
			</div>
		</div>
	)
}

export default PreviewCard;
