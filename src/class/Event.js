import React from 'react';
import Collapsible from './Collapsible.js';
import EventPin from './EventPin.js';
import {uidPinIndex, viewIsExclude, viewIsOnly} from '../script/initEvents.js';

//Event Class to encapsulate information for Smash tournaments and view on page
//Collapsible used to be more compact with display of multiple events on webpage
function Event(props){
  const close = {
    marginTop: '0',
    paddingTop: '0'
  };

  //<h2>{props.name}</h2>
  
  var isPinned = !(uidPinIndex(props.uid) === -1);

  //if the view is not include we need to think more
  if(viewIsOnly && !isPinned) return null;
  else if(viewIsExclude && isPinned) return null;

  return(
    <Collapsible title={props.name} pin={<EventPin uid={props.uid} isPinned={isPinned}/>}>
      <div style={close}>
        <p style={close}>

          <a href={props.streamURL !== "" && props.streamURL}
            class={props.streamURL === "" ? "dead" : "icon"}
            id="twitch"
            target="_blank"
            rel="noopener noreferrer"
            alt="Icon kindly provided by fontawesome.com"/>

          <a href={props.websiteURL !== "" && props.websiteURL} 
            class={props.websiteURL === "" ? "dead" : "icon"}
            id="generic"
            target="_blank"
            rel="noopener noreferrer"
            alt="Icon kindly provided by fontawesome.com"/>

          <a href={props.facebookURL !== "" && props.facebookURL}
            class={props.facebookURL === "" ? "dead" : "icon"}
            id="facebook"
            target="_blank"
            rel="noopener noreferrer"/>

          <a href={props.twitterURL !== "" && props.twitterURL}
            class={props.twitterURL === "" ? "dead" : "icon"}
            id="twitter"
            target="_blank"
            rel="noopener noreferrer"/>
    
          <br/>

          Date(s): {props.time}
    
          <br/>

          Location:&nbsp;
          <a href={props.mapURL}
                   target="_blank"
                   rel="noopener noreferrer">
            {props.location}
          </a>
          
          <br/>

          Fees: 
          venue ${props.venueFee},
          entry ${props.entryFee}
    
          <br/>

          Schedule: {props.schedule}
    
          <br/>

          Notes: {props.notes}
    
        </p>
      </div>
    </Collapsible>
  );
}

export default Event;
