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
					<ul className='space-x-10'>
						<li className='inline-block'>
							<Link className='hover:text-red-500 active:text-red-700 text-3xl' to='/'>Home</Link>
						</li>
						<li className='inline-block'>
							<Link className='hover:text-red-500 active:text-red-700 text-3xl' to='/work'>Work</Link>
						</li>
						<li className='inline-block'>
							<Link className='hover:text-red-500 active:text-red-700 text-3xl' to='/projects'>Projects</Link>
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
			<div>
				<img className='mx-auto rounded-full h-60' src='me_and_jq.png' alt='Me and JQ Baby' />
			</div>
			<div className='text-3xl font-bold'>Julian Foo Siang Sen - Full Stack Developer</div>
			<div className='text-xl'>
				I currently work at <a href='https://www.investingnote.com/' className='hover:text-red-700 font-semibold' target='blank'>InvestingNote</a>, South East Asia's biggest social network for investors.
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
