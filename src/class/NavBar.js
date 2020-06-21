import React from 'react';

import home from '../content/home.js';
import gettingStarted from '../content/gettingStarted.js';
import events from '../content/events.js';
import rankings from '../content/rankings.js';
import { Navbar } from 'react-bootstrap';
import{
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

class Nav extends React.Component{
	constructor(){
		super();
	}
	render(){
		return (
			<div>
				<Router>
					<div>
						<nav>
							<ul>
								<li>
									<Link to="/">Home</Link>
								</li>
								<li>
									<Link to="/gettingstarted">Getting Started</Link>
								</li>
								<li>
									<Link to="/events">Events</Link>
								</li>
								<li>
									<Link to="/rankings">Rankings</Link>
								</li>
							</ul>
						</nav>
						<Switch>
							<Route path="/">
								<Home />
							</Route>
							<Route path="/gettingstarted">
								<GettingStarted/>
							</Route>
							<Route path="/events">
								<contentEvents/>
							</Route>
							<Route path="/rankings">
								<contentRankings/>
							</Route>
						</Switch>
					</div>
				</Router>
			</div>
		);
	}
}

//<li class="icon" id="home" alt="Icon kindly provided by fontawesome.">Home</li>
function Home(){
	return home;
}

function GettingStarted(){
	return gettingStarted;
}

export default Nav;
