import React from 'react';

import EventFilter from '../class/EventFilter.js';
import Collapsible from '../class/Collapsible.js';
import Alert from 'react-bootstrap/Alert';
import Aos from 'aos';

import {viewIsFiltered} from '../script/initEvents.js';
import weekly from '../content/weekly.js';
import biWeeklyAndMonthly from '../content/biWeeklyAndMonthly.js';

import {getSortFunction} from '../script/sortBy.js';

export default function Events(){
  if(!viewIsFiltered){
    var allEvents = weekly;
    var disclaimer;

    if(localStorage.getItem("sortBy") === "nextOccurring")
      disclaimer = 
        <Alert variant="info" className="text-center">
          <p>
            Monthlies are not consistent enough to predict, so they are excluded from these results.
          </p>
        </Alert>;
    else
      allEvents = allEvents.concat(biWeeklyAndMonthly);

    allEvents = allEvents.sort(getSortFunction(localStorage.getItem("sortBy")));

    return(
      <div id="events-div">
        <EventFilter/>
        <div style={{marginBottom: '2em'}}/>
        {disclaimer}
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
