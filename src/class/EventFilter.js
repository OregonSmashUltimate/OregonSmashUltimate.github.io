import React from 'react';
import Collapsible from './Collapsible.js';
import Form from 'react-bootstrap/Form';

class EventFilter extends React.Component{
	constructor(props){
		super(props);
		this.state = {onlyPinned: false};
    //this.toggle = this.toggle.bind(this);
	}

  //toggle(){this.setState({open: !this.state.onlyPinned});}

  //will be more form groups later
	render(){
    const pinned = {
      backgroundColor: 'var(--pinnedColor)',
      cursor: 'default'
    };

		return(
      <Collapsible title={"Filter"}>
        <Form>
          <Form.Group controlId="filter.pinSelect">
            <Form.Label>
              <li class="icon pin"
                style={pinned}/>
                Pinned Events
            </Form.Label>
            <Form.Control as="select">
              <option>Only</option>
              <option>Include</option>
              <option>Exclude</option>
            </Form.Control> 
          </Form.Group>
        
        </Form>
      </Collapsible>
		);
	}
}

export default EventFilter;
