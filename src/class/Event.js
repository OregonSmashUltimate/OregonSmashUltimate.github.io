import React from 'react';
import Collapsible from './Collapsible.js';
import EventPin from './EventPin.js';
import thisEventDisplays from '../script/decideEventDisplay.js';

//Event Class to encapsulate information for Smash tournaments and view on page
//Collapsible used to be more compact with display of multiple events on webpage
function Event(props){
  const close = {
    marginTop: '0',
    paddingTop: '0'
  };

  //<h2>{props.name}</h2>
  
  if(!thisEventDisplays(props.uid)) return null;

  return(
    <Collapsible title={props.name} pin={<EventPin uid={props.uid}/>}>
      <div style={close}>
        <p style={close}>

          <a href={props.streamURL !== "" && props.streamURL}
            class={props.streamURL === "" ? "dead" : "icon"}
            id="twitch"
            target="_blank"
            rel="noopener noreferrer"
            alt="Icon kindly provided by fontawesome.com"> </a>

          <a href={props.websiteURL !== "" && props.websiteURL} 
            class={props.websiteURL === "" ? "dead" : "icon"}
            id="generic"
            target="_blank"
            rel="noopener noreferrer"
            alt="Icon kindly provided by fontawesome.com"> </a>

          <a href={props.facebookURL !== "" && props.facebookURL}
            class={props.facebookURL === "" ? "dead" : "icon"}
            id="facebook"
            target="_blank"
            rel="noopener noreferrer"> </a>

          <a href={props.twitterURL !== "" && props.twitterURL}
            class={props.twitterURL === "" ? "dead" : "icon"}
            id="twitter"
            target="_blank"
            rel="noopener noreferrer"> </a><br/>

          Date(s): {props.time}<br/>

          Location:&nbsp;
          <a href={props.mapURL}
                   target="_blank"
                   rel="noopener noreferrer">
            {props.location}
          </a><br/>

          Fees: {props.venueFee === "" ? "Venue: Free" : "Venue: $" + props.venueFee}
                {props.entryFee === "" ? " | Entry: Free" : " | Entry: $" + props.entryFee}<br/>

          Schedule: {props.schedule}<br/>

          Notes: {props.notes}</p>
          <hr/>
      </div>
    </Collapsible>
  );
}

export default Event;
