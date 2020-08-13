import React from 'react';

//
// Class declarations
//

class SortOption{
  constructor(a1, a2, a3, a4, a5){
    this.name =         a1;
    this.value =        a2;
    this.normalOrder =  a3;
    this.reverseOrder = a4;
    this.fn =           a5;
  }
}

class EventTime{
  constructor(a1, a2, a3){
    this.day    = a1;
    this.hour   = a2; 
    this.minute = a3;
  }
  total(){
    return (this.day * 24 * 60) + (this.hour * 60) + this.minute;
  }
}

//
// Inititalization
//

var today;
if(localStorage.getItem("sortBy") === "nextOccurring"){
  const now = new Date();
  today = new EventTime(now.getDay(), now.getHours(), now.getMinutes()).total();
}
const flip = (localStorage.getItem('sortByOrder') === "reverse") ? -1 : 1;
const digitPattern = /^\d*/g;

//
// All sort options
//

export const sortOptions = [
  new SortOption("", "none", "", "",
    function(a,b){
      return null;
    }),
  new SortOption("Name", "name", "A to Z", "Z to A",
    function(a,b){
      return flip * a.props.name.localeCompare(b.props.name);
    }),
  new SortOption("Venue Fee", "venueFee", "Low to High", "High to Low",
    function(a,b){
      return flip * (
        Number(find(digitPattern, a.props.venueFee)) -
        Number(find(digitPattern, b.props.venueFee))
      );
    }),
  new SortOption("Entry Fee", "entryFee", "Low to High", "High to Low",
    function(a,b){
      return flip * (
        Number(find(digitPattern, a.props.entryFee)) -
        Number(find(digitPattern, b.props.entryFee))
      );
    }),
  new SortOption("Venue + Entry Fee", "entryPlusVenueFee", "Low to High", "High to Low",
    function(a,b){
      return flip * (
        Number(find(digitPattern, a.props.venueFee)) +
        Number(find(digitPattern, a.props.entryFee)) -
        Number(find(digitPattern, b.props.venueFee)) -
        Number(find(digitPattern, b.props.entryFee))
      );
    }),
  new SortOption("Next Occurring", "nextOccurring", "Sooner to Later", "Later to Sooner",
    function(a,b){
      return flip * (
        (today - toEventTime(b.props.time).total()) -
        (today - toEventTime(a.props.time).total())
      );
    }),
  /*new SortOption("Distance", "distance", "Closer to Further", "Further to Closer",
    function(a,b){
      //display warning about only weeklies being predictable
      return flip * (result.distance
    }),*/
];

//
// Helper functions
//

function toEventTime(inputTime){
  const time = find(/^\w* \w* \d{1,2}:\d{2}[ap]m/g, inputTime);

  var day = find(/^\w*/g, time)[0];
  switch(day){
    case "Mondays":    day = 1; break;
    case "Tuesdays":   day = 2; break;
    case "Wednesdays": day = 3; break;
    case "Thursdays":  day = 4; break;
    case "Fridays":    day = 5; break;
    case "Saturdays":  day = 6; break;
    case "Sundays":    day = 7; break;
    default:           day = 1; break;
  }

  var hour = Number(find(/\d{1,2}/g, time));
  hour += hour !== 12 && find(/[ap]m$/g, time)[0] === 'pm';
  
  var minute = find(/:\d{2}/g, time)[0];
  minute = Number(minute[1] + minute[2]);

  //some absurdly ahead year
  return new EventTime(day, hour, minute);
}

function find(pattern, expr){
  pattern.lastIndex = 0;
  return pattern.exec(expr);
}

//
// External functions
//

export function getOptions(){
  var ret = [];
  var count = 1;
  for(const option of sortOptions){
    ret.push(<option key={count} value={option.value}>{option.name}</option>);
    count++;
  }

  return ret;
}

export function getNormalOrderText(searchValue){
  for(const option of sortOptions)
    if(option.value === searchValue)
      return option.normalOrder;

  return "";
}

export function getReverseOrderText(searchValue){
  for(const option of sortOptions)
    if(option.value === searchValue)
      return option.reverseOrder;

  return "";
}

export function getSortFunction(searchValue){
  for(const option of sortOptions)
    if(option.value === searchValue)
      return option.fn;

  return "";
}
