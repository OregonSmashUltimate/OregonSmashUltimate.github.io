import React from 'react';

import Home from '../content/home.js';
import GettingStarted from '../content/gettingStarted.js';
import Events from '../content/events.js';
import Rankings from '../content/rankings.js';
import logo from '../icon/orsmash.svg';


import{
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from "react-router-dom";

export default function Nav(){
	
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
								<li line-width="1em">
									<Link to="/"><img src={logo} id="logo-nav"></img></Link>
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
							<Route exact path="/">
								<Home />
							</Route>
							<Route path="/gettingstarted">
								<GettingStarted />
							</Route>
							<Route path="/events">
								<Events />
							</Route>
							<Route path="/rankings">
								<Rankings />
							</Route>
						</Switch>
					</div>
				</Router>
			</div>
		);
}
