import React from 'react';
import './App.css';

function MenuItem(props) {
  const { text, link } = props
  return(
    <li>
      <a href={props.link}>
        {props.text}
      </a>
    </li>
    
  );
}

function MenuBar(props) {
  return (
    <nav className="navbar-nav">
      <ul>
        <MenuItem text="hello" link="suh dudez" />
        <MenuItem text="trans rights" link="feet" />
      </ul>
    </nav>
  );
}

function App() {
  return (
    <div className="App">
      <MenuBar>

      </MenuBar>
      
      <header className="App-header">
        Oregon Smash
      </header>
    </div>
  );
}

export default App;
