import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

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

		return(	
      <div style={close}>
        <Accordion>
          <Card>
            <Card.Header>
              {this.props.pin}
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <div onClick={this.toggle} style={pointer}>
                <li class={this.state.open ? "icon plus" : "icon minus"}
                    alt="Icon kindly provided by fontawesome.com"/>
                <h2 style={inline}>{this.props.title}</h2>
              </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>
                {this.props.children}
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
		);
	}
}

export default Collapsible;
