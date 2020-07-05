import React from 'react';

class Pin extends React.Component{
	constructor(props){
		super(props);
		this.state = {pinned: false};
    this.toggle = this.toggle.bind(this);
	}

  toggle(){
    //initialize
    var isPinned = false;
    var i = -1;
    const pinnedUIDs = localStorage.getItem('pinnedEventUIDs').split(",");

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
    this.setState({pinned: isPinned});
  }

  //can initialize state based on local storage here
  //componentDidMount(){}

	render(){
    //<h2>{props.name}</h2>

    const unpinned = {
      backgroundColor: 'var(--textColor)'
    };
    const pinned = {
      backgroundColor: 'var(--linkColor)'
    };

    return(
    <li onClick={this.toggle}
      class={"icon pin"}
      style={(!this.state.pinned && unpinned) ||
             (this.state.pinned && pinned)}
    />
    );
  }
}

export default Pin;
