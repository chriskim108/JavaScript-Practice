// Type Conversion Part 2


//Number to String
	// Type convert a number to a string
		// String()
		// toString()

//String()
var num1 = 10;
console.log("Converting a number to a string -> " + String(num1) + " -> " + typeof(String(num1)));
console.log("Converting a number to a string -> " + String(4.14) + " -> " + typeof(String(4.14)));
//toString()
var num2 = 14;
console.log("Converting a number to a string -> " + num2.toString() + " -> " + typeof(num2.toString()));
console.log("Converting a number to a string -> " + 3.14.toString() + " -> " + typeof(3.14.toString()));



//Boolean to String
console.log("Converting a boolean to a string -> " + String(false) + " -> " + typeof(String(false)));
console.log("Converting a boolean to a string -> " + true.toString() + " -> " + typeof(true.toString()));



//Date to String
var dateVariable = new Date("1/1/2017");
console.log("Converting a date to a string -> " + String(dateVariable) + " -> " + typeof(String(dateVariable)));
console.log("Converting a date to a string -> " + dateVariable.toString() + " -> " + typeof(dateVariable.toString()));



//String to Numbers
console.log("Converting a string to a number -> " + Number("3.14") + " -> " + typeof(Number("3.14")));
console.log("Converting a string to a number -> " + Number("") + " -> " + typeof(Number("")));
console.log("Converting a string to a number -> " + Number(" ") + " -> " + typeof(Number(" ")));
console.log("Converting a string to a number -> " + Number("10 20") + " -> " + typeof(Number("10 20")));

//Another way to convert String to Number
	//Unity Operator
var num3 = "15";
var num4 = + num3;
console.log("Converting a string to a number -> " + num4 + " -> " + typeof(num4));

var num5 = "John";
var num6 = + num5;
console.log("Converting a string to a number -> " + num6 + " -> " + typeof(num6));



//Boolean to Number
console.log("Converting a boolean to a number (false) -> " + Number(false) + " -> " + typeof(Number(false)));
console.log("Converting a boolean to a number (true)-> " + Number(true) + " -> " + typeof(Number(true)));



//Dates to Numbers
var dateVariable2 = new Date("1/1/2017");
console.log("Converting a date to a string -> " + Number(dateVariable2) + " -> " + typeof(Number(dateVariable2)));



//Automatic Type Conversion
console.log("Automatic Type Conversion -> " + 5 + null); //5
console.log("Automatic Type Conversion -> " + "5" + null); //5null
console.log("Automatic Type Conversion -> " + "5" + 2); //52
console.log("Automatic Type Conversion -> " + "5" - "2"); //3
console.log("Automatic Type Conversion -> " + "5" * "2"); //10
