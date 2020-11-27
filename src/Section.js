import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Project from './Project';
import Work from './Work';
import PreviewCard from './PreviewCard';
import './assets/main.css';

function Navbar(){
	return(
		<Router>
			<div>
				<nav>
					<ul>
						<li className='inline-block'>
							<Link className='hover:text-red-500 active:text-red-700' to='/'>Home</Link>
						</li>
						<li className='inline-block'>
							<Link className='hover:text-red-500 active:text-red-700' to='/work'>Work</Link>
						</li>
						<li className='inline-block'>
							<Link className='hover:text-red-500 active:text-red-700' to='/projects'>Projects</Link>
						</li>
					</ul>
				</nav>
			</div>
		  <Switch>
		  	<Route exact path='/'>
		  		<Home />
		  	</Route>
		  	<Route path='/work'>
		  		<Work />
		  	</Route>
		  	<Route path='/projects'>
		  		<Project />
		  	</Route>
		  </Switch>
		</Router>
	)
}

function Home(){
	return (
		<React.Fragment>
		  <div className='flex flex-shrink-0 max-w-sm mx-auto bg-white rounded-sm shadow-md'>
				<div>
		      <img className='object-contain object-left rounded-l-lg' src='me_and_jq.png' alt='Me and JQ Baby' />
				</div>
		    <h1>Foo Siang Sen - Fullstack Developer</h1>
		  </div>
			<div>
				<p>Hi, my name is Julian! I am currently working at InvestingNote, South East Asia's biggest social network for investors.</p>
			</div>
			<div>
				<div>Projects</div>
				<div className=''>
					<PreviewCard title='Test Title' description='Test Description'/>
				</div>
			</div>
			<div>
				<div>Writings</div>
			</div>
		</React.Fragment>
	)
}

function Section(){
	return(
		<div>
			<Navbar />
		</div>
	);
}

export default Section;
