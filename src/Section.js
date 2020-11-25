import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Project from './Project';
import Work from './Work';
import './assets/main.css';

function Navbar(){
	return(
		<Router>
			<div>
				<nav>
					<ul>
						<li>
							<Link to='/'>Home</Link>
						</li>
						<li>
							<Link to='/work'>Work</Link>
						</li>
						<li>
							<Link to='/projects'>Projects</Link>
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
		<div className='flex flex-shrink-0 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md'>
		  <h2>Home</h2>
		  <h1>Foo Siang Sen - Fullstack Developer</h1>
		  <img className='block mx-auto rounded-full h-30' src='me_and_jq.png' alt='Me and JQ Baby' />
		</div>
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
