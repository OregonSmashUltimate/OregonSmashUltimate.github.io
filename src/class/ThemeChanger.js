import React from 'react';

import NavDropdown from 'react-bootstrap/NavDropdown';

export default function ThemeChanger(){
  function changeTheme(theme){
    console.log(theme);
    var textColor, linkColor, fgColor, bgColor;
    switch(theme){
      case "dark":
        textColor = "#f2f2f2"; linkColor = "#92f292";
        fgColor   = "#232d3c"; bgColor   = "#131d2c";
        break;
      case "light":
        textColor = "#1a1a1a"; linkColor = "#0f0f6a";
        fgColor   = "#ffffff"; bgColor   = "#d9d9d9";
        break;
      case "halloween":
        textColor = "#f2f2f2"; linkColor = "#11cc11";
        fgColor   = "#881200"; bgColor   = "#331100";
        break;
      case "rosey":
        textColor = "#660088"; linkColor = "#420033";
        fgColor   = "#ffffff"; bgColor   = "#e4aabb";
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
      <NavDropdown.Item onClick={() => changeTheme("rosey")}>
        Rosey
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => changeTheme("hacker")}>
        Hacker
      </NavDropdown.Item>
    </NavDropdown>
  );
}
