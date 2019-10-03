import React from 'react';

function Event(props){
  return(
    <div>
      <h2>{props.name}</h2>
      <hr />
      <p>
        {props.time}<br />
        <a href={props.mapURL}
           target="_blank"
           rel="noopener noreferrer">{props.location}</a><br />

        <a href={props.streamURL != "" && props.streamURL}
           class={props.streamURL === "" && "strikethrough"}
           target="_blank"
           rel="noopener noreferrer">Stream</a>
        &nbsp;|&nbsp; 
        <a href={props.websiteURL != "" && props.websiteURL} 
           class={props.websiteURL === "" && "strikethrough"}
           target="_blank"
           rel="noopener noreferrer">Website</a>
        &nbsp;|&nbsp; 
        <a href={props.facebookURL != "" && props.facebookURL}
           class={props.facebookURL === "" && "strikethrough"}
           target="_blank"
           rel="noopener noreferrer">facebook</a>
        &nbsp;|&nbsp; 
        <a href={props.twitterURL != "" && props.twitterURL}
           class={props.twitterURL === "" && "strikethrough"}
           target="_blank"
           rel="noopener noreferrer">Twitter</a>
        <br />

        {props.venueFee === "0" && "Venue: Free"}
        {props.venueFee != "0" && "Venue: $" + props.venueFee}

        {props.entryFee === "0" && " | Entry: Free"}
        {props.entryFee != "0" && " | Entry: $" + props.entryFee}
        <br />
        Schedule: {props.schedule}<br />
        Notes: {props.notes}
      </p>
    </div>
  );
}

export default Event;
