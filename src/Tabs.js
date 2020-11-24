import React, { useState } from 'react';
import './Tabs.css';

function Tab(props){
	const [ status, setStatus ] = useState({
		id: props.id,
		selected: false
	});

	console.log(status)

	const setActive = () => {
		setStatus({...status, selected: !status.selected});
	};

	return(
		<li
			className={status.selected ? 'selected' : undefined}
			onClick={setActive}
		>
			{props.children}
		</li>
	);
};

function Tabs(){
	return(
		<div>
			<Tab id='home'>Home</Tab>
			<Tab id='work'>Work</Tab>
			<Tab id='projects'>Projects</Tab>
		</div>
	);
};

export default Tabs;
