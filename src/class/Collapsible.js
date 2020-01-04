import React from 'react';

class Collapsible extends React.Component{
	constructor(props){
		super(props);
		this.state = {open: 1};
	}
  togglePanel(){this.setState({open: !this.state.open})}
	render(){
		return (	
      <div>
        <div onClick={this.togglePanel} style='cursor: pointer'>
          <li class={this.state.open === 0 && "icon plus" ||
                     this.state.open === 1 && "icon minus"}
              alt="Icon kindly provided by fontawesome.com"></li>
          <h2>{this.props.title}</h2>
        </div>

        <div style={this.state.open === 0 && "display: none" ||
                    this.state.open === 1 && "display: block"}>
          {this.props.children}
        </div>
      </div>
		);
	}
}

export default Collapsible;
