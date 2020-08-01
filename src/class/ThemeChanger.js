import React from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';

export default function ThemeChanger(){
  function changeTheme(theme){
    console.log(theme);
    var textColor, linkColor, fgColor, bgColor;
    switch(theme){
      case "dark":
        textColor = "#f2f2f2"; linkColor = "#b6b6b6";
        fgColor   = "#232d3c"; bgColor   = "#131d2c";
        break;
      case "light":
        textColor = "#1a1a1a"; linkColor = "#000000";
        fgColor   = "#d9d9d9"; bgColor   = "#ffffff";
        break;
      case "halloween":
        textColor = "#131313"; linkColor = "#000000";
        fgColor   = "#ff3300"; bgColor   = "#737373";
        break;
      case "cake":
        textColor = "#cc00ff"; linkColor = "#520066";
        fgColor   = "#f5ccff"; bgColor   = "#ffffff";
        break;
      case "hacker":
      default:
        textColor = "#00ff00"; linkColor = "#0000ff";
        fgColor   = "#000000"; bgColor   = "#000000";
        break;
    }
    
    var cssRoot = document.documentElement;
    cssRoot.style.setProperty('--textColor', textColor);
    cssRoot.style.setProperty('--linkColor', linkColor);
    cssRoot.style.setProperty('--fgColor', fgColor);
    cssRoot.style.setProperty('--bgColor', bgColor);
    localStorage.setItem('theme', theme);
    //console.log(String(this.state.theme));
    //console.log(localStorage.getItem("theme"));
  }

  changeTheme(localStorage.getItem('theme'));

  return (	
    <NavDropdown title="Themes"
                 className="navLink">
      <NavDropdown.Item onClick={() => changeTheme("light")}>
        Light
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeTheme("dark")}>
        Dark
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeTheme("halloween")}>
        Halloween
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeTheme("cake")}>
        Cake
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeTheme("hacker")}>
        Hacker
      </NavDropdown.Item>
    </NavDropdown>
  );
}
