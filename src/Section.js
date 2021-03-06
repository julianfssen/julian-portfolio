import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Project from './Project';
import Work from './Work';
import PreviewCard from './PreviewCard';
import IconContainer from './Icons';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa';
import './assets/main.css';

function Navbar(){
	return(
		<Router>
			<div>
				<nav>
					<ul className='space-x-10 my-10'>
						<li className='inline-block'>
							<Link className='hover:text-red-700 active:text-red-500 text-3xl' to='/'>Home</Link>
						</li>
						<li className='inline-block'>
							<Link className='hover:text-red-700 active:text-red-500 text-3xl' to='/work'>Work</Link>
						</li>
						<li className='inline-block'>
							<Link className='hover:text-red-700 active:text-red-500 text-3xl' to='/projects'>Projects</Link>
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
			  	<img className='mx-auto rounded-full h-60 mt-10' src='me.jpeg' alt='Me and JQ Baby' />
			  </div>
				<div className='flex justify-center space-x-5'>
					<a href='https://github.com/julianfssen' target='blank'>
						<IconContainer>
							<FaGithub />
						</IconContainer>
					</a>
					<a href='https://twitter.com/julianfssen' target='blank'>
						<IconContainer>
							<FaTwitter />
						</IconContainer>
					</a>
					<a href='https://www.linkedin.com/in/julianfoo/' target='blank'>
						<IconContainer>
							<FaLinkedin />
						</IconContainer>
					</a>
				</div>
			  <div className='text-3xl font-bold'>Julian Foo Siang Sen - Full Stack Developer</div>
			  <div className='text-xl'>
			  	I currently work at <a href='https://www.investingnote.com/' className='hover:text-red-700 font-semibold' target='blank'>InvestingNote</a>, South East Asia's biggest social network for investors.
			  </div>
			  <div>
			  	<div className='text-3xl font-bold my-6 mt-10 underline'>Projects</div>
			  	<div className=''>
			  		<PreviewCard url='https://api.github.com/repos/julianfssen/mockoverflow' demo_url='https://mockoverflow.herokuapp.com/'/>
			  	</div>
			  </div>
			  <div>
			  	<div className='text-3xl font-bold mt-10 underline'>Writings</div>
			  	<div className='text-xl my-5'>Coming soon!</div>
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
