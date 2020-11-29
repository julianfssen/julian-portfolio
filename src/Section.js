import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Project from './Project';
import Work from './Work';
import PreviewCard from './PreviewCard';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './assets/main.css';

function Navbar(){
	return(
		<Router>
			<div>
				<nav>
					<ul className='space-x-10'>
						<li className='inline-block'>
							<Link className='hover:text-red-700 hover:underline active:text-red-500 text-3xl' to='/'>Home</Link>
						</li>
						<li className='inline-block'>
							<Link className='hover:text-red-700 hover:underline active:text-red-500 text-3xl' to='/work'>Work</Link>
						</li>
						<li className='inline-block'>
							<Link className='hover:text-red-700 hover:underline active:text-red-500 text-3xl' to='/projects'>Projects</Link>
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
	const [hovered, setHover] = useState(false);

	return (
		<React.Fragment>
			<div className='space-y-5'>
			  <div>
			  	<img className='mx-auto rounded-full h-60 mt-10' src='me_and_jq.png' alt='Me and JQ Baby' />
			  </div>
				<div className='space-x-5'>
					<a href='https://github.com/julianfssen' target='blank'>
					  <FaGithub
						  className='inline' 
						  color={hovered ? 'red' : null} 
							size={28} 
						  onMouseOver={() => setHover(!hovered)} 
						  onMouseOut={() => setHover(!hovered)}
						/>
					</a>
					<a href='https://twitter.com/julianfssen' target='blank'><FaTwitter className='inline' size={28}/></a>
					<a href='https://www.linkedin.com/in/julianfoo/' target='blank'><FaLinkedin className='inline' size={28}/></a>
				</div>
			  <div className='text-3xl font-bold'>Julian Foo Siang Sen - Full Stack Developer</div>
			  <div className='text-xl'>
			  	I currently work at <a href='https://www.investingnote.com/' className='hover:text-red-700 font-semibold' target='blank'>InvestingNote</a>, South East Asia's biggest social network for investors.
			  </div>
			  <div>
			  	<div className='text-3xl font-bold my-5'>Projects</div>
			  	<div className=''>
			  		<PreviewCard title='Test Title' description='Test Description'/>
			  	</div>
			  </div>
			  <div>
			  	<div className='text-3xl font-bold my-5'>Writings</div>
			  </div>
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
