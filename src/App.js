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
    <nav>
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
      <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">WebSiteName</a>
    </div>
    <ul class="nav navbar-nav">
      <li class="active"><a href="#">Home</a></li>
      <li><a href="#">Page 1</a></li>
      <li><a href="#">Page 2</a></li>
      <li><a href="#">Page 3</a></li>
    </ul>
  </div>
</nav>
      <header className="App-header">
        Oregon Smash
      </header>
    </div>
  );
}

export default App;
