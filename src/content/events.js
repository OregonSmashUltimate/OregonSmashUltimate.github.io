import React from 'react';

import EventFilter from '../class/EventFilter.js';
import Collapsible from '../class/Collapsible.js';
import Aos from 'aos';

import {viewIsInclude} from '../script/initEvents.js';
import Weekly from './weekly.js'
import BiWeeklyAndMonthly from './biWeeklyAndMonthly.js'

export default function Events(){
  if(!viewIsInclude){
    return(
      <div id="events-div">
        <EventFilter/>
        <div style={{marginBottom: '2em'}}/>
        <Weekly/>
        <BiWeeklyAndMonthly/>
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
          <Weekly/>
        </Collapsible>
      </div>
      <div data-aos="fade-up"
        data-aos-delay="50">
        <Collapsible title="Bi-Weeklies & Monthlies">
          <BiWeeklyAndMonthly/>
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
