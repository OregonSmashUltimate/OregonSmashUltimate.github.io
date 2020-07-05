import React from 'react';

class EventPin extends React.Component{
	constructor(props){
		super(props);
		this.state = {pinned: false};
    this.toggle = this.toggle.bind(this);

    //do something more effiecient in the future
    const pinnedUIDs = localStorage.getItem('pinnedEventUIDs').split(',');

    for(const uid of pinnedUIDs){
      if(uid === this.props.uid){
        this.state = {pinned: true};
        break;
      }
    }
	}

  toggle(){
    //initialize
    var isPinned = false;
    var i = -1;
    const pinnedUIDs = localStorage.getItem('pinnedEventUIDs').split(',');

    //determine if this event is already pinned
    for(const uid of pinnedUIDs){
      ++i;
      if(uid === this.props.uid){
        isPinned = true;
        break;
      }
    }

    //create then set new uid array for localStorage
    var pinnedUIDsConcatenated = "";
    if(isPinned) pinnedUIDs.splice(i, 1);
    else         pinnedUIDs.push(this.props.uid);

    for(const uid of pinnedUIDs)
      if(uid != "")
        pinnedUIDsConcatenated += uid + ",";

    localStorage.setItem('pinnedEventUIDs', pinnedUIDsConcatenated);

    //update state
    this.setState({pinned: !isPinned});
  }

	render(){
    const unpinned = {
      backgroundColor: 'var(--unpinnedColor)'
    };
    const pinned = {
      backgroundColor: 'var(--pinnedColor)'
    };

    return(
    <li onClick={this.toggle}
      class={"icon eventPin"}
      style={this.state.pinned ? pinned : unpinned}
    />
    );
  }
}

export default EventPin;
