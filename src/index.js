/*orgiginal code that I'm clueless on
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
*/

var title = document.getElementsByTagName("h1")[0];
var subtitle = document.getElementsByTagName("h2")[0];
var description = document.getElementsByTagName("p")[0];
//if I put .innerhtml here then the content switching won't actually work

/*will not work in offline testing
const axios = require('axios');
const cheerio = require('cheerio');
*/

var titleData = 
[title.innerHTML,
 
 "Never been to a tournament before but want to try it out?",
 
 "Something Related To or Witty About Oregon Locals",
 
 "Something Related To or Witty About Oregon Regionals",
 
 "Something Related To or Witty About Oregon Majors, Maybe Them Just Not Existing?",
 
 "Rankings"];

var subtitleData = 
[subtitle.innerHTML,
 
 "Try going to a local.",
 
 "Next local: <a href='index.html'>Tournament Name</a> @ Date Time, <a href='index.html'>Location</a>",
 
 "Next regional: <a href='index.html'>Tournament Name</a> @ Date Time, <a href='index.html'>Location</a>",
 
 "Next major (nearby to Oregon): <a href='index.html'>Tournament Name</a> @ Date Time, <a href='index.html'>Location</a>",
 
 "If you have to fight any of these people in bracket you may be in trouble."];

var descriptionData = 
[description.innerHTML,
 
 "A local is a small tournament where you can meet people from your area in a less competitive (and potentionally expensive) environment. You might not see any top players there, but because of the smaller size it's much easier to ask questions as you get introduced to things. <a onclick='loadDiv(2)'>See locals by clicking or tapping here.</a>",

 "Locals Description<br>"
 + "Upcoming Tournaments (this is a dummy calendar):<br>"
 + "<iframe src='https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles'>",
 
 "Regionals Description<br>"
 + "Upcoming Tournaments (this is a dummy calendar):<br>"
 + "<iframe src='https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles'>",
 
 "Majors Description<br>"
 + "Upcoming Tournaments (this is a dummy calendar):<br>"
 + "<iframe src='https://calendar.google.com/calendar/embed?src=en.usa%23holiday%40group.v.calendar.google.com&ctz=America%2FLos_Angeles'>",

 "Rankings Description<br>"
 + "Doesn't a different website do this? Should I just link it here? Should I scrape it and put it into custom css?<br>"

/* + "<div id='number1'>"
 + "	<img src='brokeImage.png' alt='character image'>"
 + "	<h3>Player Name</h3>"
 + "	<p>Social Media</p>"
 + "</div>"
 + "<div id='number2'>"
 + "	<img src='brokeImage.png' alt='character image'>"
 + "	<p>Player Name</p>"
 + "	<p>Social Media</p>"
 + "</div>"
 + "<div id='number3'>"
 + "	<img src='brokeImage.png' alt='character image'>"
 + "	<p>Player Name</p>"
 + "	<p><a href='index.html' target='_blank'>Social Media</p>"
 + "</div>"*/];
 
function loadDiv(i){
	if(i < 0 || i > titleData.length) i = 0;
	title.innerHTML = titleData[i];
	subtitle.innerHTML = subtitleData[i];
	description.innerHTML = descriptionData[i];
	console.log("Contents switched.");
}

var nav = document.getElementsByTagName("nav")[0].getElementsByTagName("ul")[0];
var navListData = 
[nav.innerHTML,
 "<li onclick='changeNav(0)'><</li>" +
 "<li onclick='loadDiv(2)'>Locals</li>" + 
 "<li onclick='loadDiv(3)'>Regionals</li>" + 
 "<li onclick='loadDiv(4)'>Majors</li>"];

function changeNav(i){
	if(i < 0 || i > titleData.length) i = 0;
	nav.innerHTML = navListData[i];
}

function changeTheme(primaryColor, secondaryColor, tertiaryColor){
	let root = document.documentElement;
	root.style.setProperty('--primaryColor', primaryColor);
	root.style.setProperty('--secondaryColor', secondaryColor);
	root.style.setProperty('--tertiaryColor', tertiaryColor);
}

console.log("Javascript link successful.");