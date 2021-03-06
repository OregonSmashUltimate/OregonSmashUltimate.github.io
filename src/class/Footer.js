import React from 'react';
import ReactDOM from 'react-dom';

import ThemeChanger from './ThemeChanger.js';
import TextSizeChanger from './TextSizeChanger.js';
import Page from './Page.js';

import facebook from '../content/facebook.js';
import twitter from '../content/twitter.js';
import github from '../content/github.js';
import discord from '../content/discord.js';

var root = document.getElementById('root');

function Footer(props){
	function popupFacebook(){ReactDOM.render(<Page children={facebook}/>, root);}
	function popupTwitter() {ReactDOM.render(<Page children={twitter} />, root);}
	function popupGithub()  {ReactDOM.render(<Page children={github}  />, root);}
	function popupDiscord() {ReactDOM.render(<Page children={discord} />, root);}
  //these functions are a temporary dumb solution for tag values not working correctly in React, thus an inablity to pass arguments to an onClick function without inefficient rerenderring

  return (	
    <footer>
      <ul>
        <TextSizeChanger/>
        <ThemeChanger/>
        <li class="icon" id="facebook" onClick={popupFacebook}/>
        <li class="icon" id="twitter" onClick={popupTwitter}/>
        <li class="icon" id="github" onClick={popupGithub}/>
        <li class="icon" id="discord" onClick={popupDiscord}/>
      </ul>
    </footer>
  );
}

export default Footer;
