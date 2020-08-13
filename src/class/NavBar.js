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
      <Navbar fixed="top" expand="md" bg="custom">
        <Navbar.Brand as={Link} to="/" href="#home">
            <li className="icon logo"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" alt="Icon kindly provided by Font Awesome">
          <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" href="#">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="getting-started" href="getting-started">
                Getting Started
              </Nav.Link>
              <Nav.Link as={Link} to="events" href="events">
                Events
              </Nav.Link>
              <Nav.Link as={Link} to="rankings" href="rankings">
                Rankings
              </Nav.Link>
              <NavDropdown title="Social Media" className="navLink">
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
