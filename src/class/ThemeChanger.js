import React from 'react';

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
				fgColor = "#d9d9d9"; bgColor = "#ffffff";
				break;
			case 2: //halloween
        this.setState(state => ({theme: 3}));
				textColor = "#131313"; linkColor = "#000000";
				fgColor = "#ff3300"; bgColor = "#737373";
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
      <li onClick={this.changeTheme}><button>Swap Palette</button></li>
      //<li onClick={this.changeTheme} class="icon" id="palette" alt="Icon kindly provided by fontawesome."></li>
		);
	}
}

export default ThemeChanger;
