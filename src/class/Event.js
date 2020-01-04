import React from 'react';
import Collapsible from './Collapsible.js';

//Event Class to encapsulate information for Smash tournaments and view on page
//Collapsible used to be more compact with display of multiple events on webpage
function Event(props){
  const close = {
    marginTop: '0',
    paddingTop: '0'
  };
  //<h2>{props.name}</h2>
  return(
    <Collapsible title={props.name}>
      <div style={close}>
        <p style={close}>
          <a href={props.streamURL !== "" && props.streamURL}
            class={props.streamURL === "" && "dead" || props.streamURL !== "" && "icon"}
            id="twitch"
            target="_blank"
            rel="noopener noreferrer"
            alt="Icon kindly provided by fontawesome.com"></a>

          <a href={props.websiteURL !== "" && props.websiteURL} 
            class={props.websiteURL === "" && "dead" || props.websiteURL !== "" && "icon"}
            id="generic"
            target="_blank"
            rel="noopener noreferrer"
            alt="Icon kindly provided by fontawesome.com"></a>

          <a href={props.facebookURL !== "" && props.facebookURL}
            class={props.facebookURL === "" && "dead" || props.facebookURL !== "" && "icon"}
            id="facebook"
            target="_blank"
            rel="noopener noreferrer"></a>

          <a href={props.twitterURL !== "" && props.twitterURL}
            class={props.twitterURL === "" && "dead" || props.twitterURL !== "" && "icon"}
            id="twitter"
            target="_blank"
            rel="noopener noreferrer"></a><br/>

          Date(s): {props.time}<br/>

          Location:&nbsp;
          <a href={props.mapURL}
                   target="_blank"
                   rel="noopener noreferrer">
            {props.location}
          </a><br/>

          Fees: {props.venueFee === "" && "Venue: Free" ||
                 props.venueFee !== "" && "Venue: $" + props.venueFee}
                {props.entryFee === "" && " | Entry: Free" ||
                 props.entryFee !== "" && " | Entry: $" + props.entryFee}<br/>

          Schedule: {props.schedule}<br/>

          Notes: {props.notes}</p>
          <hr/>
      </div>
    </Collapsible>
  );
}

export default Event;
