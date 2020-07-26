import React from 'react';

import Home from '../page/home.js';
import GettingStarted from '../page/getting-started.js';
import Events from '../page/events.js';
import Rankings from '../page/rankings.js';

import Facebook from '../content/facebook.js';
import Discord  from '../content/discord.js';
import Twitter  from '../content/twitter.js';
import GitHub   from '../content/github.js';

import ThemeChanger from './ThemeChanger.js';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavDropdown from 'react-bootstrap/NavDropdown';

import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

export default function NavBar(){
  return (
    <Router>
      <Navbar fixed="top" expand="sm" bg="custom">
        <Navbar.Brand href="#home"><li class="icon logo"/></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
              <Nav.Link href="#">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="getting-started">
                <Link to="getting-started">Getting Started</Link>
              </Nav.Link>
              <Nav.Link href="events">
                <Link to="events">Events</Link>
              </Nav.Link>
              <Nav.Link href="rankings">
                <Link to="rankings">Rankings</Link>
              </Nav.Link>
              <NavDropdown title="Social Media">
                <Facebook />
                <Discord />
                <Twitter />
                <GitHub />
              </NavDropdown>
              <NavItem><ThemeChanger /></NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route exact path="/getting-started"><GettingStarted /></Route>
        <Route exact path="/events"><Events /></Route>
        <Route exact path="/rankings"><Rankings /></Route>
      </Switch>
    </Router>
  );
}
