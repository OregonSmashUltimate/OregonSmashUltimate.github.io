import React from 'react';

import NavBar from './NavBar.js';
import Home from '../page/home.js';
import GettingStarted from '../page/getting-started.js';
import Events from '../page/events.js';
import Rankings from '../page/rankings.js';
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function Page(props){
	return (
		<>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path="/"><Home /></Route>
					<Route exact path="/getting-started"><GettingStarted /></Route>
					<Route exact path="/events"><Events /></Route>
					<Route exact path="/rankings"><Rankings /></Route>
				</Switch>
			</Router>
		</>
	);
}

export default Page;
