//Date Formats

	//ISO Dates Format -> YYYY-MM-DD
var dateInfo = new Date("2016-03-25");
console.log(dateInfo.toString());

var dateInfo = new Date("2016-03");
console.log(dateInfo.toString());

var dateInfo = new Date("2016");
console.log(dateInfo.toString());

var dateInfo = new Date("2016-03-25T12:32:44");
console.log(dateInfo.toString());

	//Short Dates Format -> mm/dd/yy
var newDateInfo1 = new Date("03/25/2016");
console.log(newDateInfo1.toString()); 

	//Long Dates Format -> mm/dd/yy
var newDateInfo2 = new Date("Mar 25 2016");
console.log(newDateInfo2.toString()); 

var newDateInfo2 = new Date("25 March 2016");
console.log(newDateInfo2.toString()); 

	//Full Date Format -> Mon Feb 29 2016 19:00:00 GMT-0500 (Eastern Standard Time)
var newDateInfo3 = new Date("Mon Feb 29 2016 19:00:00 GMT-0500 (Eastern Standard Time)");
console.log(newDateInfo3.toString()); 

