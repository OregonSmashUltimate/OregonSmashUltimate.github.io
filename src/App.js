import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './class/Page';
import NavBar from './class/NavBar.js'
import Home from './page/home.js'
import GettingStarted from './page/getting-started.js';
import Events from './page/events.js';
import Rankings from './page/rankings.js';
import Footer2 from './class/Footer2.js';
import{
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

//Animate On Scroll
import "aos/dist/aos.css";

function App() {
  return (
    <div className="App">
      <Page/>
      <Router>
				<NavBar />
				<Switch>
					<Route exact path="/"><Home /></Route>
					<Route exact path="/getting-started"><GettingStarted /></Route>
					<Route exact path="/events"><Events /></Route>
					<Route exact path="/rankings"><Rankings /></Route>
				</Switch>
        <Footer2 />
			</Router>
    </div>
  );
}

export default App;
