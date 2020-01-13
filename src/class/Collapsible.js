import React from 'react';

class Collapsible extends React.Component{
	constructor(props){
		super(props);
		this.state = {open: 0};
    this.toggle = this.toggle.bind(this);
	}
  toggle(){this.setState({open: !this.state.open});}
	render(){
    //react is obstinate to strings >:(
    const pointer = {
      cursor: 'pointer',
      paddingBottom: '0',
      marginBottom: '0'
    };
    const close = {
      marginTop: '0',
      paddingTop: '0'
    };
    const inline = {
      display: 'inline'
    };
    const block = {
      display: 'block'
    };
    const none = {
      display: 'none'
    };

		return(	
      <div style={close}>
        <div onClick={this.toggle} style={pointer}>
          <li class={!this.state.open && "icon plus" ||
                      this.state.open && "icon minus"}
              alt="Icon kindly provided by fontawesome.com"/>
          <h2 style={inline}>{this.props.title}</h2>
        </div>

        <div style={!this.state.open && none ||
                     this.state.open && block}>
          {this.props.children}
        </div>
      </div>
		);
	}
}

/*
        <div onClick={this.toggle} style="cursor: pointer">


        <div style={!this.state.open && "display: none" ||
                     this.state.open && "display: block"}>

*/

export default Collapsible;
