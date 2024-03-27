export default function convertMilliseconds(givenMilliseconds) {

    var time = givenMilliseconds; // random milli number 1294862756114
    var date = new Date(time); // create Date object for that milliseconds
    // return date.toString(); // result: Wed Jan 12 2011 12:42:46 GMT-0800 (PST)
    return date.toLocaleDateString(); // result: 1/12/2011
    
  }