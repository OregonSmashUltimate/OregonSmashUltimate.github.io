import React from 'react';

class EventPin extends React.Component{
	constructor(props){
		super(props);
		this.state = {isPinned: this.props.isPinned};
    this.toggle = this.toggle.bind(this);
	}

  toggle(){
    //initialize
    const pinnedUIDs = localStorage.getItem('pinnedEventUIDs').split(',');
    var pinnedUIDsConcatenated = "";

    //tweak pinnedUIDs to reflect new pin status
    if(this.state.isPinned){
      var i = -1;
      for(const uid of pinnedUIDs){
        ++i;
        if(uid === this.props.uid) break;
      }

      pinnedUIDs.splice(i, 1);
    }
    else
      pinnedUIDs.push(this.props.uid);

    //concat tweaked pinnedUIDs for localStorage
    for(const uid of pinnedUIDs)
      if(uid !== "")
        pinnedUIDsConcatenated += uid + ",";

    localStorage.setItem('pinnedEventUIDs', pinnedUIDsConcatenated);

    //update state
    this.setState({isPinned: !this.state.isPinned});
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
      style={this.state.isPinned ? pinned : unpinned}
    />
    );
  }
}

export default EventPin;
