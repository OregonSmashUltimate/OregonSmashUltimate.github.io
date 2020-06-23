import React from 'react';

import Event from '../class/Event.js';
import Collapsible from '../class/Collapsible';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';

export default function Events(){
  return(
    <div id="events-div">
      <Accordion defaultActiveKey="0">
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          <h2>Weeklies</h2>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey="0">
          <hr/>
              <Event
                name="Dropzone"
                time="Sundays from 12:00pm-6:00pm"
                mapURL="https://goo.gl/maps/ir4vbcYbpTB8aWPk8"
                location="CCG House, Vancouver, WA"
                streamURL="https://twitch.tv/teamsolidarity"
                websiteURL="https://www.teamsolidarity.info/dropzone"
                facebookURL=""
                twitterURL="https://twitter.com/dropzone_ts"
                venueFee="5"
                entryFee="5 per bracket"
                schedule="Doors Open @ 12:00pm | Doubles @ 12:30pm | Singles @ 2:00pm"
                notes="Spectate and play friendlies for free!"/>
              <Event
                name="Topdeck Tuesdays"
                time="Tuesdays from 5:30pm-9:00pm"
                mapURL="https://goo.gl/maps/A6SzTLTsPdc1rrzu8"
                location="The Yugioh Outlet, Gresham, OR"
                streamURL=""
                websiteURL=""
                facebookURL=""
                twitterURL="https://twitter.com/ORchapter6"
                venueFee="5"
                entryFee="5"
                schedule="Singles @ 6:00pm"
                notes="Spectate and play friendlies for free!"/>
              <Event
                name="Cascade"
                time="Wednesdays starting 6:00pm"
                mapURL="https://g.page/Gongaii?share"
                location="Gongaii Games, Inc., Beaverton, OR"
                streamURL="https://twitch.tv/pdxcascade"
                websiteURL=""
                facebookURL=""
                twitterURL="https://twitter.com/PDXCascade"
                venueFee="5"
                entryFee="5"
                schedule="Singles @ 6:00pm"
                notes="Side Brackets @ 5:00 PM, vote for the event on the linked Twitter; Spectate and play friendlies for free!"/>
              <Event
                name="Sacred Sanctuary"
                time="Fridays from 5:30pm-9:00pm"
                mapURL="https://goo.gl/maps/WjiKEBNZ2QRwLEbj7"
                location="Room SS 121, PCC Sylvania Campus, Portland, OR"
                streamURL="https://twitch.tv/UnitySmash"
                websiteURL=""
                facebookURL=""
                twitterURL="https://twitter.com/TeziiMewtwo"
                venueFee="5"
                entryFee="5 per bracket"
                schedule="Singles @ 6:00pm"
                notes="Spectate and play friendlies for free!"/>
              <Event
                name="Salem Smashfest"
                time="Saturdays starting 11:30pm"
                mapURL="https://goo.gl/maps/N6gJ79SQAyKNqBLEA"
                location="Corban University, Salem, OR 97317"
                streamURL="https://twitch.tv/salemsmashfests"
                websiteURL=""
                facebookURL="https://www.facebook.com/groups/SalemSmashfests/"
                twitterURL="https://twitter.com/SalemSmashfests"
                venueFee="5"
                entryFee="5 for Singles, $2 for Doubles"
                schedule="Singles @ 1:30pm, Doubles @ 4:30pm"
                notes="Free brackets for fighting games, such as BlazBlue Cross-Tag Battle, Tekken 7, and Guilty Gear Xrd -Rev2-"/>
        </Accordion.Collapse>
      </Accordion>
     
    </div>
  );
}
//for embedded maps do to share in Google Maps

