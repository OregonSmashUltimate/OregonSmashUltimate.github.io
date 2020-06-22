import React from 'react';

import Event from '../class/Event.js';
import Collapsible from '../class/Collapsible';

export default function Events(){
  return(
    <div>
    <Collapsible title="Weeklies">
      <div>
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
      </div>
    </Collapsible>
    <Collapsible title="Bi-Weeklies & Monthlies">
    <div>
      <hr></hr>
      <Event
          name="Unity Station by Unity Smash"
          time="Monthly Saturdays"
          mapURL="https://goo.gl/maps/R37UWCbbxwsCFQJG6"
          location="Lucky Lab in Multnomah Village, Portland, OR"
          streamURL="https://twitch.tv/UnitySmash"
          websiteURL=""
          facebookURL=""
          twitterURL="https://twitter.com/UnitySmash"
          venueFee=""
          entryFee=""
          schedule="Doubles: 12:30pm | Singles: 1:30pm"
          notes="CURRENTLY ON HIATUS"/>
        <Event
          name="Rose City Unification by Epic Gaming"
          time="Saturday Monthly from 12:00pm-End"
          mapURL="https://goo.gl/maps/JUMV64GYZaKchVHXA"
          location="Epic Gaming, Milwaukie, OR"
          streamURL="https://www.youtube.com/channel/UCaGyt3cYgeNpOnZJnMh7lPQ"
          websiteURL="http://epicgaming.tcgplayerpro.com/"
          facebookURL="https://www.facebook.com/epicgamingpdx/"
          twitterURL="https://twitter.com/epicgamingpdx"
          venueFee="10 ($5 off for bringing a setup)"
          entryFee="5 per bracket"
          schedule="Doubles: 12:30pm | Singles: 1:30pm"
          notes="Dates announced on Facebook and Discord"/>
        <Event
          name="UO Smash Club"
          time="2nd and 4th Fridays starting 5:30pm"
          mapURL="https://goo.gl/maps/BBryhEMt5sPW4q2TA"
          location="McKenzie Hall Room 125 in University of Oregon, Eugene, OR"
          streamURL=""
          websiteURL="http://uosmash.com/#/sm4sh/contact"
          facebookURL="https://www.facebook.com/groups/uosmash/"
          twitterURL=""
          venueFee=""
          entryFee=""
          schedule="Loose"
          notes=""/>
        <Event
          name="SmashVallis Saturdays"
          time="2nd and 4th Sundays starting 4:00pm"
          mapURL="https://goo.gl/maps/unXSowxVeeXZSPTg7"
          location="Bloss Hall in Oregon State University, Corvallis, OR"
          streamURL=""
          websiteURL=""
          facebookURL="https://www.facebook.com/groups/OfficialCorvallisSmash4/"
          twitterURL=""
          venueFee=""
          entryFee="3"
          schedule="Loose"
          notes="Singles and doubles!"/>
      </div>
    </Collapsible>
    <Collapsible title="Regionals">
      <p>Regionals are larger scale events that usually take place every other month or so. If you want to experience larger competition and play players from outside of your region, these are the events to go to! To stay updated on upcoming regionals, be sure to check our Discord and Facebook pages!
      </p>
    </Collapsible>
    </div>
  );
}
//for embedded maps do to share in Google Maps

