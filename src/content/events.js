import React from 'react';

import EventFilter from '../class/EventFilter.js';
import Collapsible from '../class/Collapsible.js';
import Aos from 'aos';

import {viewIsFiltered} from '../script/initEvents.js';
import weekly from './weekly.js';
import biWeeklyAndMonthly from './biWeeklyAndMonthly.js';

export default function Events(){
  const flip = (localStorage.getItem('sortByOrder') === "descending") ? 1 : -1;
  
  //must reset lastIndex on every use
  const pattern = /^\d*/g;

  const sortFunc = {
    none:{
      fn: (a,b) => {
        return null;
      }
    },
    name:{
      fn: (a,b) => {
        return flip * a.props.name.localeCompare(b.props.name);
      }
    },
    venueFee:{
      fn: (a,b) => {
        pattern.lastIndex = 0;
        const l = Number(pattern.exec(a.props.venueFee));
        pattern.lastIndex = 0;
        const r = Number(pattern.exec(b.props.venueFee));

        return flip * (l - r);
      }
    },
    entryFee:{
      fn: (a,b) => {
        pattern.lastIndex = 0;
        const l = Number(pattern.exec(a.props.entryFee));
        pattern.lastIndex = 0;
        const r = Number(pattern.exec(b.props.entryFee));

        return flip * (l - r);
      }
    },
    //distance:{fn: (a,b) => null},
    //I'd love to use Google's distance API, but it's a paid service
  }

  if(!viewIsFiltered){
    var allEvents = weekly.concat(biWeeklyAndMonthly);
    allEvents = allEvents.sort(sortFunc[localStorage.getItem("sortBy")].fn)
    return(
      <div id="events-div">
        <EventFilter/>
        <div style={{marginBottom: '2em'}}/>
        {allEvents}
      </div>
    );
  }

  //else
  Aos.init({
    duration: 1000,
  });
  return(
    <div id="events-div">
      <div data-aos="fade-up">
        <EventFilter/>
      </div>
      <div data-aos="fade-up">
        <div style={{marginBottom: '1em'}}/>
      </div>
      <div data-aos="fade-up"
        data-aos-delay="50">
        <Collapsible title="Weeklies">
          {weekly}
        </Collapsible>
      </div>
      <div data-aos="fade-up"
        data-aos-delay="50">
        <Collapsible title="Bi-Weeklies & Monthlies">
          {biWeeklyAndMonthly}
        </Collapsible>
      </div>
      <div data-aos="fade-up"
        data-aos-delay="100">
        <Collapsible title="Regionals">
          <p>Regionals are larger scale events that usually take place every other month or so. If you want to experience larger competition and play players from outside of your region, these are the events to go to! To stay updated on upcoming regionals, be sure to check our Discord and Facebook pages!
          </p>
        </Collapsible>
      </div>
     
    </div>
  );
}
//for embedded maps do to share in Google Maps
