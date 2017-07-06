//Switch Expression

//Switch Statement Syntax
/*
switch(expression){
	case n:
		code block;
		break;
	case m:
	  	code block;
		break;
		...
}
*/

// This can be an alternative to the if-else statement


//Example 1
var day;
switch (new Date().getDay()){
	case 0:
		day = "Sunday";
		break;
	case 1:
		day = "Monday";
		break;
	case 2:
		day = "Tuesday";
		break;
	case 3:
		day = "Wednesday";
		break;
	case 4:
		day = "Thursday";
		break;
	case 5:
		day = "Friday";
		break;
	case 6:
		day = "Saturday";
		break;
}
console.log(day);
document.getElementById('day').innerHTML = day;


//Example 2	
var defaultDay;
switch (new Date().getDay()){
	case 0:
		defaultDay = "This is a Sunday";
		break;
	case 6:
		defaultDay = "This is a Saturday";
		break;
	default:
		defaultDay = "Looking forward for the weekend!";
			
}
console.log(defaultDay);
document.getElementById('defaultDay').innerHTML = defaultDay;

	
//Example 3
var defaultDay2;
switch (new Date().getDay()){
	case 1:
	case 2:
	case 3:
	//
	default:
		defaultDay2 = "Looking forward for the weekend";
		break;
	case 4:
	case 5:
		defaultDay2 = "Soon it is weekend!";
		break;
	case 0:
	case 6: 
		defaultDay2 = "It is a weekend!";
		
}

console.log(defaultDay2);
document.getElementById('defaultDay2').innerHTML = defaultDay2;

// This is a prototype
	//It will take an input from the HTML file and go through the logical progression
function checkCar() {
	var text;
	// This will get retrive the input from the input tag
	var favCar = document.getElementById('myInput').value;
	console.log(favCar);
	
	switch (favCar){
		case "BMW":
			text= "German Car";
			break;
		case "Ford":
			text="American Car";
			break;
		case "Peugeot":
			text="French Car";
			break;
		default:
			text= "Unknown car";
	}
	document.getElementById('car').innerHTML = text;
	console.log(text);
}