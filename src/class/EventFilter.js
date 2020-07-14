import React       from 'react';
import Collapsible from './Collapsible.js';
import Form        from 'react-bootstrap/Form';
import Button      from 'react-bootstrap/Button';
import Col         from 'react-bootstrap/Col';

class EventFilter extends React.Component{
	constructor(props){
		super(props);

    this.state = {pinnedEvents: localStorage.getItem('pinnedEvents'),
      sortBy: localStorage.getItem('sortBy'),
      sortByOrder: localStorage.getItem('sortByOrder')};

    this.handlePinnedEvents = this.handlePinnedEvents.bind(this);
    this.handleSortBy = this.handleSortBy.bind(this);
    this.handleSortByOrder = this.handleSortByOrder.bind(this);

    this.handleSubmit = this.handleSubmit.bind(this);
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

  //will be more form groups later
	render(){
    const pinned = {
      backgroundColor: 'var(--pinnedColor)',
      cursor: 'default'
    };

		return(
      <Collapsible title={"Filter"}>
        <Form onSubmit={this.handleSubmit}>

          <Form.Row>
            <Form.Group as={Col}>
              <Form.Label column>
                <li class="icon pin" style={pinned}/>
                Pinned Events
              </Form.Label>
              <Form.Control as="select"
                value={this.state.pinnedEvents}
                onChange={this.handlePinnedEvents}>
                <option value="only">Only</option>
                <option value="include">Include</option>
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
                <option value="none"></option>
                <option value="name">Name</option>
                <option value="distance">Distance</option>
              </Form.Control> 
              {this.state.sortBy !== "none" &&

              <Form.Control as="select"
                value={this.state.sortByOrder}
                onChange={this.handleSortByOrder}>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </Form.Control>}
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
