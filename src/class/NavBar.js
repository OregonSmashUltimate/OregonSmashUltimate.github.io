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
	constructor(props){
		super(props);
		this.state = {content: home, tall: false};
		this.Rankings = this.Rankings.bind(this);
    // 	this.contentHome = this.contentHome.bind(this);
	// 	this.contentGettingStarted = this.contentGettingStarted.bind(this);
	// 	this.contentEvents = this.contentEvents.bind(this);
	// 	this.contentRankings = this.contentRankings.bind(this);
	}
	// contentHome(){          this.setState(state => ({content: home,           tall: false}));}
	// contentGettingStarted(){this.setState(state => ({content: gettingStarted, tall: true}));}
	// contentEvents(){        this.setState(state => ({content: events,         tall: true}));}
	// contentRankings(){      this.setState(state => ({content: rankings,       tall: true}));}
	Home(){
		return home;
	}
	GettingStarted(){
		return gettingStarted;
	}
	Events(){
		return events;
	}
	Rankings(){
		this.state.tall = true;
		return rankings;
	}

  //these functions are a temporary dumb solution for tag values not working correctly in React, thus an inablity to pass arguments to an onClick function without inefficient rerenderring
  
	render(){
		return (	
			<Router>
				
				<nav id="tall">
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
				<Switch>
					<Route path="/gettingstarted">  
						<this.GettingStarted />
					</Route>
					<Route path="/events">  
						<this.Events />
					</Route>
					<Route path="/rankings">  
						<this.Rankings />
					</Route>
					<Route path="/">  
						<this.Home />
					</Route>
				</Switch>
				</nav>
			</Router>
		);
	}
}

//<li class="icon" id="home" alt="Icon kindly provided by fontawesome.">Home</li>
export default Nav;
