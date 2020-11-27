import React from 'react';
import './assets/main.css';

function PreviewCard(props) {
	return (
		<div className='mx-auto rounded-lg w-80 h-32 bg-blue-50 shadow-md'>
			<div className='text-lg'>{props.title}</div>
			{props.description}
		</div>
	)
}

export default PreviewCard;
