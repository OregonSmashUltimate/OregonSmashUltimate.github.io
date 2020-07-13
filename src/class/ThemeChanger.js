import React from 'react';

class ThemeChanger extends React.Component{
	constructor(props){
		super(props);
    //add offset because changeTheme() does += 1
		this.state = {theme: Number(localStorage.getItem('theme') - 1)};
		this.changeTheme = this.changeTheme.bind(this);
    this.changeTheme();
	}

	changeTheme(){
		var textColor, linkColor, fgColor, bgColor, unpinnedColor, pinnedColor;
		switch(this.state.theme){
			case 0: //dark
				textColor = "#f2f2f2"; linkColor = "#b6b6b6";
				fgColor = "#232d3c"; bgColor = "#131d2c";
				unpinnedColor = "#a2a2a2"; pinnedColor = "#323232";
				break;
			case 1: //light
				textColor = "#1a1a1a"; linkColor = "#000000";
				fgColor = "#d9d9d9"; bgColor = "#ffffff";
				unpinnedColor = "#a2a2a2"; pinnedColor = "#323232";
				break;
			case 2: //halloween
				textColor = "#131313"; linkColor = "#000000";
				fgColor = "#ff3300"; bgColor = "#737373";
				unpinnedColor = bgColor; pinnedColor = fgColor;
				break;
			case 3: //cake
				textColor = "#cc00ff";	linkColor = "#520066";
				fgColor = "#f5ccff"; bgColor = "#ffffff";
				unpinnedColor = linkColor; pinnedColor = textColor;
				break;
			default: //hacker
				textColor = "#00ff00";	linkColor = "#0000ff";
				fgColor = "#000000"; bgColor = "#000000";
				unpinnedColor = bgColor; pinnedColor = textColor;
				break;
		}
    this.state = {theme: (this.state.theme + 1) % 4};
		var cssRoot = document.documentElement;
		cssRoot.style.setProperty('--textColor', textColor);
		cssRoot.style.setProperty('--linkColor', linkColor);
		cssRoot.style.setProperty('--fgColor', fgColor);
		cssRoot.style.setProperty('--bgColor', bgColor);
		cssRoot.style.setProperty('--unpinnedColor', unpinnedColor);
		cssRoot.style.setProperty('--pinnedColor', pinnedColor);
    localStorage.setItem('theme', String(this.state.theme));
    //console.log(String(this.state.theme));
    //console.log(localStorage.getItem("theme"));
	}
	render(){
		return (	
      <li onClick={this.changeTheme}><button>Swap Palette</button></li>
      //<li onClick={this.changeTheme} class="icon" id="palette" alt="Icon kindly provided by fontawesome."></li>
		);
	}
}

export default ThemeChanger;
