import React from 'react';

class Collapsible extends React.Component{
	constructor(props){
		super(props);
		this.state = {open: 1};
    this.toggle = this.toggle.bind(this);
	}
  toggle(){this.setState({open: !this.state.open});}
	render(){
		return(	
      <div>
        <div onClick={this.toggle} style="cursor: pointer">
          <li class={!this.state.open && "icon plus" ||
                      this.state.open && "icon minus"}
              alt="Icon kindly provided by fontawesome.com"/>
          <h2>{this.props.title}</h2>
        </div>

        <div style={!this.state.open && "display: none" ||
                     this.state.open && "display: block"}>
          {this.props.children}
        </div>
      </div>
		);
	}
}

export default Collapsible;
