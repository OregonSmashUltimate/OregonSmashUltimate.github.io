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
		this.state = {content: "", tall: false};
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(newContent){
    this.setState(state => ({content: gettingStarted, tall: true}));
  }
	render(){
		return (	
      <nav id={this.state.tall ? "tall" : ""}>
        <ul>
          <li onClick={this.handleClick}>Getting Started</li>
          <li onClick={this.handleClick}>Calendars</li>
          <li onClick={this.handleClick}>Rankings</li>
        </ul>
        {this.state.content}
      </nav>
		);
	}
}

class Footer extends React.Component{
	constructor(props){
		super(props);
	}
	handleClick(e){
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
					<li onClick="handleClick">
						<img src="icon/twitter.svg" alt="Twitter" height="25pt" />
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

/*
const popup = <Popup title="Twitter" children={twitter} />
const page = <Page children={popup} />
*/

const page = <Page />

ReactDOM.render(page, root);

//===============================================================================================
const gettingStarted = 
<div>
  <h1>Welcome!</h1>
  <h2>Rulesets</h2>
  <p>Rulesets are a per-tournament, self-imposed set of rules to promote competition and fairness. Usually Smash tournaments rulesets restrict the following.</p>
    <p>Stages you can pick<br />
    Many stages have walkoffs which lead to degenerate play, and some platform and shapes can mess with moves and recoveries. For example, many characters with telelporting recoveries will have their recovery send them in the wrong direction because of a slant under the stage, when they otherwise would have made it back.</p>

    <p>The order you can pick stages<br />
    Even if we restrict the stages we can play, there's bound to be stages that favor some characters over others. In the spirit of fair competition, stage selection should not determine who wins. Many rulesets will not let the winner pick the next stage to prevent snowballing.</p>

    <p>Stock count (usually three stocks)<br />
    Between the many stocks of Melee due to its fast pace, and the few stocks of Smash Bros. for Wii U due to its slow pace, competetors have decided to settle in the middle for Smash Ultimate. Using stocks instead of time makes the playing field more level between characters who kill fast and characters who play slow, increasing the variety of characters viable for competition.</p>

  <p>Items<br />
  Items easily lead to snowballing.</p>

  <h2>Code of Conduct</h2>
  <p>Tournaments usually have an entry fee which pays for the building, the staffing, and the winners' prizes. If you're clean, aren't an ass, and bring your own contoller and you'll usually be fine. While matches are going on, if you're planning on using that free set up over there, ask first, as it's probably reserved for an upcoming match. Usually the tournament staff you can ask questions and report the results of matches to are on a computer or walking around announcing the next match. At the end of every match, one person needs to tell the staff the match results. Your safest bet is the one on the computer.</p>

  <h2>Enterring a tournament!</h2>
  <p>If you've never played competitive smash before and want to try it out, try going to a 'local'! A local is the smallest type of the tournament that registers on leaderboards. Because of their small size, at locals it's easier to make friends, they're usually less expensive, and they're shorter. Go to 'Calandars' to find a local right for you!</p>
</div>
