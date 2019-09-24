import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

var root = document.getElementById('root');
ReactDOM.render(<App />, root);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

function Page(props){
	return (
		<div>
			<Nav />
			{props.children}
			<Footer />
		</div>
	);
}

class Nav extends React.Component{
	constructor(props){
		super(props);
		this.state = {};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		console.log("Nav item clicked");
	}
	render(){
		return (	
      <nav>
        <ul>
          <li onClick="">Getting Started</li>
          <li onClick="">Calendars</li>
          <li onClick="">Rankings</li>
        </ul>
      </nav>
		);
	}
}

class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	handleClick(){
		console.log("Footer item clicked");
	}
	render(){
		return (	
			<footer>
				<ul>
				  <ThemeChanger />
					<li onClick="handleClick">
						<img src="icon/facebook.svg" alt="facebook" height="25pt" />
					</li>
					<li onClick="handleClick">
						<img src="icon/discord.svg" alt="Discord" height="25pt" />
					</li>
				</ul>
			</footer>
		);
	}
}


class ThemeChanger extends React.Component{
	constructor(props){
		super(props);
		this.state = {theme: 1};
		this.changeTheme = this.changeTheme.bind(this);
	}
	changeTheme(){
		var textColor, linkColor, fgColor, bgColor;
		switch(this.state.theme){
			case 0: //dark
        this.setState(state => ({theme: 1}));
				textColor = "#f2f2f2"; linkColor = "#b6b6b6";
				fgColor = "#232d3c"; bgColor = "#131d2c";
				break;
			case 1: //light
        this.setState(state => ({theme: 2}));
				textColor = "#1a1a1a"; linkColor = "#000000";
				fgColor = "#ffffff"; bgColor = "#d9d9d9";
				break;
			case 2: //halloween
        this.setState(state => ({theme: 3}));
				textColor = "#232323"; linkColor = "#000000";
				fgColor = "#ff3300"; bgColor = "#434343";
				break;
			case 3: //cake
        this.setState(state => ({theme: 4}));
				textColor = "#cc00ff";	linkColor = "#520066";
				fgColor = "#f5ccff"; bgColor = "#ffffff";
				break;
			default: //hacker
        this.setState(state => ({theme: 0}));
				textColor = "#00ff00";	linkColor = "#0000ff";
				fgColor = "#000000"; bgColor = "#000000";
				break;
		}
		var cssRoot = document.documentElement;
		cssRoot.style.setProperty('--textColor', textColor);
		cssRoot.style.setProperty('--linkColor', linkColor);
		cssRoot.style.setProperty('--fgColor', fgColor);
		cssRoot.style.setProperty('--bgColor', bgColor);
	}
	render(){
		return (	
					<li onClick={this.changeTheme}><button>Swap Pallete</button></li>
		);
	}
}

/*
class ThemeChanger extends React.Component{
	constructor(props){
		super(props);
		this.state = {theme: 9729};
		this.changeTheme = this.changeTheme.bind(this);
	}
	changeTheme(){
		var textColor, linkColor, fgColor, bgColor;
		switch(this.state.theme){
			case 129299: //dark
        this.setState(state => ({theme: 9729}));
				textColor = "#f2f2f2"; linkColor = "#b6b6b6";
				fgColor = "#232d3c"; bgColor = "#131d2c";
				break;
			case 9729: //light
        this.setState(state => ({theme: 9728}));
				textColor = "#1a1a1a"; linkColor = "#000000";
				fgColor = "#ffffff"; bgColor = "#d9d9d9";
				break;
			case 9728: //halloween
        this.setState(state => ({theme: 9760}));
				textColor = "#131313"; linkColor = "#000000";
				fgColor = "#ff3300"; bgColor = "#001a00";
				break;
			case 9760: //cake
        this.setState(state => ({theme: 9829}));
				textColor = "#cc00ff";	linkColor = "#520066";
				fgColor = "#f5ccff"; bgColor = "#ffffff";
				break;
			default: //hacker
        this.setState(state => ({theme: 129299}));
				textColor = "#00ff00";	linkColor = "#0000ff";
				fgColor = "#000000"; bgColor = "#000000";
				break;
		}
		var cssRoot = document.documentElement;
		cssRoot.style.setProperty('--textColor', textColor);
		cssRoot.style.setProperty('--linkColor', linkColor);
		cssRoot.style.setProperty('--fgColor', fgColor);
		cssRoot.style.setProperty('--bgColor', bgColor);
	}
	render(){
		return (	
					<li onClick={this.changeTheme}>&#{this.state.theme};</li>
		);
	}
}

class Popup extends React.Component{
	constructor(props){
		super(props);
		this.state = {display: true};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(){
		this.setState(state => ({display: false})); //I'll make it more effiecient later
	}
	render(){
		return (
		<div class={this.state.display ? "outerDiv" : "zombie"}>
			<div class="header">
				{this.props.title}
				<a onClick={this.handleClick}>&#10006;</a>
			</div>
			{this.props.children}
		</div>
		);
	}
}

class Popup extends React.Component{
	constructor(props){
		super(props);
		this.state = {display: true};
		this.handleClick = this.handleClick.bind(this);
	}
  componentWillUnmount(){
    this.style.animation
  }
	handleClick(){
		ReactDOM.render(<Page />, root);
	}
	render(){
		return (
		<div class="outerDiv">
			<div class="header">
				{this.props.title}
				<a onClick={this.handleClick}>&#10006;</a>
			</div>
			{this.props.children}
		</div>
		);
	}
}
*/

function Popup(props){
	function handleClick(e){
		ReactDOM.render(<Page />, root);
	}
	return (
		<div class="popup">
			<div class="header">
				{props.title}
				<a onClick={handleClick}>&#10006;</a>
			</div>
			{props.children}
		</div>
	);
}

function SocialMedia(props){
	return (
		<div class="SocialMedia">
			<img id="profileImg" src={props.profileImg} alt="Unable to load profile picture." />
			<a href={props.url} target="_blank">{props.username}</a>
		</div>
	);
}

const twitter = 
<SocialMedia
	title="Twitter"
	profileImg="https://pbs.twimg.com/profile_images/967808988879482880/tCuE8jn9_400x400.jpg"
	url="https://twitter.com/michelleobama"
	username="@michellobama"
/>

const popup = <Popup title="Twitter" children={twitter} />
const page = <Page children={popup} />

ReactDOM.render(page, root);
