import React from 'react';

import Event from '../class/Event.js';

export default function BiWeeklyAndMonthly(){
  return(
    <div>
      <Event
        uid="6"
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
        uid="7"
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
          uid="8"
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
          uid="9"
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
  );
}
