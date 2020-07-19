import React from 'react';

const flip = (localStorage.getItem('sortByOrder') === "reverse") ? -1 : 1;
const pattern = /^\d*/g;

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
      pattern.lastIndex = 0;
      const l = Number(pattern.exec(a.props.venueFee));
      pattern.lastIndex = 0;
      const r = Number(pattern.exec(b.props.venueFee));

      return flip * (l - r);
    }),
  new SortOption("Entry Fee", "entryFee", "Low to High", "High to Low",
    function(a,b){
      pattern.lastIndex = 0;
      const l = Number(pattern.exec(a.props.entryFee));
      pattern.lastIndex = 0;
      const r = Number(pattern.exec(b.props.entryFee));

      return flip * (l - r);
    }),
  new SortOption("Venue + Entry Fee", "entryPlusVenueFee", "Low to High", "High to Low",
    function(a,b){
      pattern.lastIndex = 0;
      const ll = Number(pattern.exec(a.props.venueFee));
      pattern.lastIndex = 0;
      const lr = Number(pattern.exec(a.props.entryFee));
      pattern.lastIndex = 0;
      const rl = Number(pattern.exec(b.props.venueFee));
      pattern.lastIndex = 0;
      const rr = Number(pattern.exec(b.props.entryFee));

      return flip * (ll + lr - rl - rr);
    }),
];

export function getOptions(){
  var ret = [];
  for(const option of sortOptions){
    ret.push(<option value={option.value}>{option.name}</option>);
  }

  console.log(ret);

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
