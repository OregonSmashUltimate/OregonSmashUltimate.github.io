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
      <div id="logo"></div>
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
          <li onClick={this.handleClick}>Events</li>
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
    ReactDOM.render(<Page children={github} />, root);
	}
	render(){
		return (	
			<footer>
				<ul>
				  <ThemeChanger />
					<li onClick={this.handleClick} class="icon" id="facebook"></li>
					<li onClick={this.handleClick} class="icon" id="twitter"></li>
					<li onClick={this.handleClick} class="icon" id="github"></li>
					<li onClick={this.handleClick} class="icon" id="discord"></li>
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
		<div id="popup">
			<div id="header">
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
      <p>
        {props.role}
        &nbsp;|&nbsp;
			  <a href={props.url} target="_blank">{props.username}</a>
      </p>
		</div>
	);
}

ReactDOM.render(<Page />, root);

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
<p>If you've never played competitive smash before and want to try it out, try going to a 'local'! A local is the smallest type of the tournament that registers on leaderboards. Because of their small size, at locals it's easier to make friends, they're usually less expensive, and they're shorter. Go to 'Events' to find a local right for you!</p>
</div>

const events = 
<div>
<h1>Right Now</h1>
<iframe src="foo">I am a placeholder for a Twitch steam of a tournament going on right now. I know I am going on right now because the Google Calandar says so, and I know what stream to show because they put it in the description. If there are no Google Calandar events going on right now, I will tell the user there are no tournaments happing right now.</iframe>

<h1>Next</h1>
<iframe src="foo">I am a placeholder for our Google Calandar. By having a Google Calandar instead of a database to know upcoming tournaments, tournament hosts promoting their tournaments don't need any keys or knowlege on our website, and we don't need to do any mainteinance or changes to the website for them.</iframe>

<p>How do I put my tournament on here?<br />
Ask our project manager for access (see footer for social media links). They will fill you in on our format and guidelines.</p>
</div>

const rankings =
<div>
<h1>Rankings are kept track of on <a href="https://smash.gg/rankings/" target="_blank">smash.gg</a></h1>
<p>When looking up rankings, keep in mind they are separated by season, so they are not always up to date. Rankings are decided by points earned from tournament placings.</p>
</div>

const twitter = 
<Popup title="Twitter" children={
<SocialMedia
	profileImg="https://pbs.twimg.com/profile_images/1120052132776796160/nbK9A9G7_400x400.jpg"
  role="Lead Developer & Content Editor"
	url="https://twitter.com/CeruleanAoi?s=09"
	username="@CeruleanAoi"
/>}/>

const facebook = 
<Popup title="facebook" children={
<SocialMedia
	profileImg=""
  role=""
	url=""
	username=""
/>}/>

const discord = 
<Popup title="Discord" children={
<div>
<SocialMedia
	profileImg="https://cdn.discordapp.com/avatars/194312605941104640/817e8a5e5a0139076775833c44e16a9b.png"
  role="Project Manager"
	url="https://discordapp.com/"
	username="UNITY | Everest#1614" />

<SocialMedia
	profileImg="https://cdn.discordapp.com/avatars/77311178010796032/f72bf2cee59e6b8fc22703fa01708d7b.png"
  role="Developer Lead"
	url="https://discordapp.com/"
	username="Cyril#9605" />

<SocialMedia
	profileImg="https://cdn.discordapp.com/avatars/485620789643575307/651d326acb6c47e651548a4d53826a01.png"
  role="Lead Developer"
	url="https://discordapp.com/"
	username="honeydew#8300" />

<SocialMedia
	profileImg="https://cdn.discordapp.com/avatars/210957217485029376/c76b6f904e8db259822e7696efa10213.png"
  role="Human Database"
	url="https://discordapp.com/"
	username="giantrobotbee#0001" />

<SocialMedia
	profileImg="https://cdn.discordapp.com/avatars/96396806367227904/eca3bc8a3eeea3873c7e4be4f0b00210.png"
  role="Logo Design"
	url="https://discordapp.com/"
	username="goilup#3147" />
</div>
} />
//when I copied them all the user profile links ended in ?size=128

const github =
<Popup title="GitHub" children={
<div>
<SocialMedia
	profileImg="https://avatars1.githubusercontent.com/u/54699262?s=200&v=4"
  role="Repo"
	url="https://github.com/OregonSmashUltimate/OregonSmashUltimate.github.io"
	username="OregonSmashUltimate.github.io"/>
<hr />
<SocialMedia
	profileImg="https://avatars0.githubusercontent.com/u/10984092?s=460&v=4"
  role="Project Manager"
	url="https://github.com/malin383"
	username="malin383"/>
<hr />
<SocialMedia
	profileImg="https://avatars1.githubusercontent.com/u/1504375?s=460&v=4"
  role="Developer Lead"
	url="https://github.com/cyril-vandyke"
	username="cyril-vandyke"/>
<hr />
<SocialMedia
	profileImg="https://avatars3.githubusercontent.com/u/21343049?s=460&v=4"
  role="Lead Developer"
	url="https://github.com/jCallon"
	username="jCallon"/>
<hr />
<SocialMedia
	profileImg="https://avatars3.githubusercontent.com/u/253703?s=460&v=4"
  role="Human Database"
	url="https://github.com/giantrobotbee"
	username="giantrobotbee"/>
<hr />
<SocialMedia
	profileImg="https://avatars2.githubusercontent.com/u/29513096?s=460&v=4"
  role="Logo Design"
	url="https://github.com/bananyog"
	username="bananyog"/>
</div>
}/>
