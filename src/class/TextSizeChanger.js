import React from 'react';

class TextSizeChanger extends React.Component{
	constructor(props){
		super(props);
		this.state = {mobile: 1};
		this.changeTextSize = this.changeTextSize.bind(this);
	}
  componentDidMount(){
    //read localStorage to see their setting from last time
    if(localStorage.getItem("mobile") != "1") return;
    this.setState({mobile: 0});
    document.body.style.fontSize = '12pt';
  }

  changeTextSize(){
    this.setState({mobile: !this.state.mobile});
    if(this.state.mobile){
      document.body.style.fontSize = '12pt';
      localStorage.setItem("mobile", "1");
    }
    else{
      document.body.style.fontSize = '16pt';
      localStorage.setItem("mobile", "0");
    }
  }
  render(){
    return(
      <li className="icon"
          id={!this.state.mobile && "desktop" ||
               this.state.mobile && "mobile"}
          onClick={this.changeTextSize}
          alt="Icon kindly provided by fontawesome.com"/>
    );
  }
}

export default TextSizeChanger;
