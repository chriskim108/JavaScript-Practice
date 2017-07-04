//Date Methods

var dataInfo = new Date();
console.log(dataInfo.toString());


	//Get methods
console.log("Getting the date -> " + dataInfo.getDate());
console.log("Getting the day -> " + dataInfo.getDay());
console.log("Getting the years -> " + dataInfo.getFullYear());
console.log("Getting the hours -> " + dataInfo.getHours());
console.log("Getting the milliseconds -> " + dataInfo.getTime()); 


	//Set methods
dataInfo.setDate(31);
console.log("Setting the date -> " + dataInfo.getDate());

dataInfo.setYear(2034);
console.log("Setting the day -> " + dataInfo.getDay());

dataInfo.setTime(1498976077569);
console.log("Setting the milliseconds -> " + dataInfo.getTime()); 
console.log("Setting the milliseconds -> " + dataInfo.toString()); 

	//Parsing
		//Convert this to milliseconds
var milisec = Date.parse("Dec 31, 2016");
console.log(milisec);
		//Using the parse data to convert back to full time
dataInfo.setTime(milisec);
console.log(dataInfo);


	//Comparing Dates
var today, someday, text;
today = new Date();
someday = new Date();
someday.setFullYear(2020, 0, 10);

if(someday > today){
	console.log("Today is before January the 10th, 2020");
} else{
	console.log("Today is after 2020");
}








