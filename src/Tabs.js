import React, { useState } from 'react';
import './Tabs.css';

function Tab(props){
	const [ status, setStatus ] = useState({
		selected: false,
		tabIndex: 0
	});

	console.log(status)

	const setActive = () => {
		setStatus({...status, selected: true});
	};

	return(
		<li
			className={status.selected ? 'selected' : undefined}
			onClick={() => setActive()}
		>
			{props.text}
		</li>
	);
};

function Tabs(){
	return(
		<div>
		  <Tab text='Home'/>
		  <Tab text='Work'/>
		  <Tab text='Projects'/>
		</div>
	);
};

export default Tabs;
