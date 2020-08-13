import React       from 'react';
import Collapsible from './Collapsible.js';
import Form        from 'react-bootstrap/Form';
import Button      from 'react-bootstrap/Button';
import Col         from 'react-bootstrap/Col';
import {getOptions, getNormalOrderText, getReverseOrderText} from '../script/sortBy.js';

class EventFilter extends React.Component{
	constructor(props){
		super(props);

    this.state = {pinnedEvents: localStorage.getItem('pinnedEvents') || "",
      sortBy: localStorage.getItem('sortBy') || "none",
      sortByOrder: localStorage.getItem('sortByOrder') || "normal"};

    this.handlePinnedEvents = this.handlePinnedEvents.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
    this.handleSortByOrder = this.handleSortByOrder.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleReset = this.handleReset.bind(this);
	}

  handlePinnedEvents(event){
    this.setState({pinnedEvents: event.target.value});
  }

  handleSortBy(event){
    this.setState({sortBy: event.target.value});
  }

  handleSortByOrder(event){
    this.setState({sortByOrder: event.target.value});
  }

  handleSubmit(){
    localStorage.setItem('pinnedEvents', this.state.pinnedEvents);
    localStorage.setItem('sortBy', this.state.sortBy);
    localStorage.setItem('sortByOrder', this.state.sortByOrder);
  }

  handleReset(){
    this.setState({pinnedEvents: "include",
      sortBy: "none",
      sortByOrder: "normal"});
  }

  //will be more form groups later
	render(){
    const pinned = {
      backgroundColor: 'var(--linkColor)',
      cursor: 'default'
    };

		return(
      <Collapsible title={"Filter"}>
        <Form onSubmit={this.handleSubmit}>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label column>
                <li className="icon pin" style={pinned}/>
                Pinned Events
              </Form.Label>
              <Form.Control as="select"
                value={this.state.pinnedEvents}
                onChange={this.handlePinnedEvents}>
                <option value="include">Include</option>
                <option value="only">Only</option>
                <option value="exclude">Exclude</option>
              </Form.Control> 
            </Form.Group>
          </Form.Row>
        
          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label column>Sort By</Form.Label>
              <Form.Control as="select"
                value={this.state.sortBy}
                onChange={this.handleSortBy}>
                {getOptions()}
              </Form.Control> 

              {this.state.sortBy !== "none" &&
              <Form.Control as="select"
                value={this.state.sortByOrder}
                onChange={this.handleSortByOrder}>
                <option value="normal">{getNormalOrderText(this.state.sortBy)}</option>
                <option value="reverse">{getReverseOrderText(this.state.sortBy)}</option>
              </Form.Control>}
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col}>
              <Button variant="secondary"
                type="reset"
                onClick={this.handleReset}>Reset</Button>
            </Form.Group>
            <Form.Group as={Col}>
              <Button variant="primary"
                type="submit">Submit</Button>
            </Form.Group>
          </Form.Row>

        </Form>
      </Collapsible>
		);
	}
}

export default EventFilter;
