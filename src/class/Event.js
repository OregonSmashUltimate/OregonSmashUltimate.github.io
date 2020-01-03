import React from 'react';
import Collapsible from './Collapsible';

//Event Class to encapsulate information for Smash tournaments and view on page
//Collapsible used to be more compact with display of multiple events on webpage
function Event(props){
  return(
    <Collapsible title={props.name}>
      <div style={{paddingBottom : '0px', paddingTop : '0px'}}>
        <h4>{props.name}</h4>
        <p><small>
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
            rel="noopener noreferrer"></a>
          <br />

          <u>Dates</u>: {props.time}<br />
          <u>Location:</u>
          <a href={props.mapURL}
              target="_blank"
              rel="noopener noreferrer"> {props.location}</a><br />

          <u>Fees:</u> {props.venueFee === "" && "Venue: Free" || props.venueFee !== "" && "Venue: $" + props.venueFee}

          {props.entryFee === "" && " | Entry: Free" || props.entryFee !== "" && " | Entry: $" + props.entryFee}
          <br />
          <u>Schedule:</u> {props.schedule}<br />
          <u>Notes:</u> {props.notes}
          </small></p>
          <hr />
      </div>
    </Collapsible>
  );
}

export default Event;
