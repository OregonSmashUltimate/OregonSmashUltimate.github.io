import React from 'react';
import Collapsible from './Collapsible.js';
import EventPin from './EventPin.js';
import {uidPinIndex, viewIsExclude, viewIsOnly} from '../script/initEvents.js';

/*
Field     | Description                      | Format
----------+----------------------------------+--------
uid       | arbitrary number unique to event | integer
name      | name of event                    | string
time      | when the event occurs            | <day of week>s starting/from __:__am/pm-__:__am/pm
mapURL    | link to where event occurs       | google map url
location  | where the event occurs           | string
*URL      | url of event's * page            | url or empty string
venueFee  | cost of entering event location  | integer ...
entryFee  | cost of entering event bracket   | integer ...
scehdule  | times when brackets start        | string
notes     | anything other information       | string
*/


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

          <a href={props.streamURL === "" ? "" : props.streamURL}
            className={props.streamURL === "" ? "dead" : "icon twitch"}
            target="_blank"
            rel="noopener noreferrer"
            alt="Icon kindly provided by fontawesome.com"> </a>

          <a href={props.websiteURL === "" ? "" : props.websiteURL} 
            className={props.websiteURL === "" ? "dead" : "icon generic"}
            target="_blank"
            rel="noopener noreferrer"
            alt="Icon kindly provided by fontawesome.com"> </a>

          <a href={props.facebookURL === "" ? "" : props.facebookURL}
            className={props.facebookURL === "" ? "dead" : "icon facebook"}
            target="_blank"
            rel="noopener noreferrer"> </a>

          <a href={props.twitterURL === "" ? "" : props.twitterURL}
            className={props.twitterURL === "" ? "dead" : "icon twitter"}
            target="_blank"
            rel="noopener noreferrer"> </a>
    
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
