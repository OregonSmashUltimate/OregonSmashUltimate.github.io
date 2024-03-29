import React from 'react';

import Facebook from '../content/facebook.js';
import Discord  from '../content/discord.js';
import Twitter  from '../content/twitter.js';
import GitHub   from '../content/github.js';
import Info     from '../content/info.js';

import ThemeChanger from './ThemeChanger.js';

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavItem from 'react-bootstrap/NavItem';
import NavDropdown from 'react-bootstrap/NavDropdown';

import{ Link } from "react-router-dom";

export default function NavBar(){
  return (
      <Navbar fixed="top" expand="md" bg="custom" className='shadow'>
        <Navbar.Brand href="#home">
          <Link to="/" className="navLink">
            <li class="icon logo"/>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" alt="Icon kindly provided by Font Awesome">
          <Nav className="mr-auto">
              <Nav.Link href="#">
                <Link to="/" className="navLink">Home</Link>
              </Nav.Link>
              <Nav.Link href="getting-started">
                <Link to="getting-started" className="navLink">Getting Started</Link>
              </Nav.Link>
              <Nav.Link href="events">
                <Link to="events" className="navLink">Events</Link>
              </Nav.Link>
              <Nav.Link href="rankings">
                <Link to="rankings" className="navLink">Rankings</Link>
              </Nav.Link>
              <NavDropdown title="Social Media" className="navLink">
                <Facebook />
                <Discord />
                <Twitter />
                <GitHub />
              </NavDropdown>
              <NavItem><ThemeChanger /></NavItem>
              <Info />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
  );
}
