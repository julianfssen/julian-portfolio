import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

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
		  		<Projects />
		  	</Route>
		  </Switch>
		</Router>
	)
}

function Home(){
	return (
		<div>
		  <h2>Home</h2>
		  <h1>Foo Siang Sen - Fullstack Developer</h1>
		  <img src='me_and_jq.png' alt='Me and JQ Baby' />
		</div>
	)
}

function Work(){
	return <h2>Work</h2>
}

function Projects(){
	return <h2>Projects</h2>
}

function Section(){
	return(
		<div>
			<Navbar />
		</div>
	);
}

export default Section;
