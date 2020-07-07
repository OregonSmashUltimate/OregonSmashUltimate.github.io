import React       from 'react';
import Collapsible from './Collapsible.js';
import Form        from 'react-bootstrap/Form';
import Button      from 'react-bootstrap/Button';
import Row         from 'react-bootstrap/Row';
import Col         from 'react-bootstrap/Col';

class EventFilter extends React.Component{
	constructor(props){
		super(props);
		this.state = {pinnedEvents: "include"};
	}

  //will be more form groups later
	render(){
    const pinned = {
      backgroundColor: 'var(--pinnedColor)',
      cursor: 'default'
    };

    const handleSubmit = (event) =>{
      const form = event.currentTarget;
      console.log(form);
    }

		return(
      <Collapsible title={"Filter"}>
        <Form onSubmit={handleSubmit} method="get">
          <Form.Row>
            <Form.Group as={Col} controlId="filter.pinnedEventsSelect">
              <Form.Label column>
                <li class="icon pin" style={pinned}/>
                Pinned Events
              </Form.Label>
              <Form.Control as="select" name="pinnedEvents">
                <option value="only">Only</option>
                <option value="include">Include</option>
                <option value="exclude">Exclude</option>
              </Form.Control> 
            </Form.Group>
          </Form.Row>
        
          <Button type="submit">
            Submit
          </Button>

        </Form>
      </Collapsible>
		);
	}
}

export default EventFilter;
