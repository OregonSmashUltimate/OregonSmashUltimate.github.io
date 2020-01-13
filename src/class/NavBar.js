import React from 'react';

import home from '../content/home.js';
import gettingStarted from '../content/gettingStarted.js';
import events from '../content/events.js';
import rankings from '../content/rankings.js';
import { Navbar } from 'react-bootstrap';

class Nav extends React.Component{
	constructor(props){
		super(props);
		this.state = {content: home, tall: false};
    this.contentHome = this.contentHome.bind(this);
		this.contentGettingStarted = this.contentGettingStarted.bind(this);
		this.contentEvents = this.contentEvents.bind(this);
		this.contentRankings = this.contentRankings.bind(this);
	}
	contentHome(){          this.setState(state => ({content: home,           tall: false}));}
	contentGettingStarted(){this.setState(state => ({content: gettingStarted, tall: true}));}
	contentEvents(){        this.setState(state => ({content: events,         tall: true}));}
	contentRankings(){      this.setState(state => ({content: rankings,       tall: true}));}
  //these functions are a temporary dumb solution for tag values not working correctly in React, thus an inablity to pass arguments to an onClick function without inefficient rerenderring
  
	render(){
		return (	
      <nav id={this.state.tall ? "tall" : ""} >
        <ul>
          <li onClick={this.contentHome}>Home</li>
          <li onClick={this.contentGettingStarted}>Getting Started</li>
          <li onClick={this.contentEvents}>Events</li>
          <li onClick={this.contentRankings}>Rankings</li>
        </ul>
        {this.state.content}
      </nav>
		);
	}
}

//<li class="icon" id="home" alt="Icon kindly provided by fontawesome.">Home</li>
export default Nav;
