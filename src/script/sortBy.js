import React from 'react';

const flip = (localStorage.getItem('sortByOrder') === "reverse") ? -1 : 1;
const digitPattern = /^\d*/g;

class SortOption{
  constructor(a1, a2, a3, a4, a5){
    this.name =         a1;
    this.value =        a2;
    this.normalOrder =  a3;
    this.reverseOrder = a4;
    this.fn =           a5;
  }
}

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
      //display warning about only weeklies being predictable and to make sure as the time pappraches by using socail media
      const today = new Date().getTime();
      //https://www.tutorialspoint.com/How-to-calculate-the-difference-between-two-dates-in-JavaScript
      return flip * (
        (today - toDate(a.props.time).getTime()) -
        (today - toDate(b.props.time).getTime())
      );
    }),
  /*new SortOption("Distance", "distance", "Closer to Further", "Further to Closer",
    function(a,b){
      //display warning about only weeklies being predictable
      return flip * (result.distance
    }),*/
];

function find(pattern, expr){
  pattern.lastIndex = 0;
  return pattern.exec(expr);
}

function toDate(inputTime){
  const time = find(/^\w* \w* \d{1,2}:\d{2}[ap]m/g, inputTime);

  var day = find(/^\w*/g, time)[0];
  switch(day){
    case "Mondays":    day = "1"; break;
    case "Tuesdays":   day = "2"; break;
    case "Wednesdays": day = "3"; break;
    case "Thursdays":  day = "4"; break;
    case "Fridays":    day = "5"; break;
    case "Saturdays":  day = "6"; break;
    case "Sundays":    day = "7"; break;
    default:           day = "1"; break;
  }

  const hourNum = Number(find(/\d{1,2}/g, time));
  const plusPm = hourNum !== 12 && find(/[ap]m$/g, time)[0] === 'pm';
  //I hate JS sometimes
  const hour0 = String(((hourNum - (hourNum % 10))/ 10) + plusPm);
  const hour1 = String((hourNum % 10) + (plusPm * 2));
  const hour = hour0 + hour1;
  
  //I hate JS sometimes
  var minute = find(/:\d{2}/g, time)[0];
  minute = minute[1] + minute[2];

  //some absurdly ahead year
  return new Date(`3000-01-1${day}T${hour}:${minute}:00`);
}

export function getOptions(){
  var ret = [];
  for(const option of sortOptions){
    ret.push(<option value={option.value}>{option.name}</option>);
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
