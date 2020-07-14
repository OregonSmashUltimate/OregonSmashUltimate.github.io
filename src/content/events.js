import React from 'react';

import EventFilter from '../class/EventFilter.js';
import Collapsible from '../class/Collapsible.js';
import Aos from 'aos';

import {viewIsInclude} from '../script/initEvents.js';
import weekly from './weekly.js'
import biWeeklyAndMonthly from './biWeeklyAndMonthly.js'

export default function Events(){
  const sortFunc = {
    none:{fn: (a,b) => null},
    name:{fn: (a,b) => a.props.name.localeCompare(b.props.name)},
    distance:{fn: (a,b) => null},
  }

  if(!viewIsInclude){
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
