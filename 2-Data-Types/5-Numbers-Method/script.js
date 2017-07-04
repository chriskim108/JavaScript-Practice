
//Method -> toString()
	//Converting to a string
var x = 123;
console.log("toString() -> " + x.toString(), (123).toString());

//Method -> toExponential(#)
	//Will round for us
var y = 123e5 // 12300000
var y1 = 9.656
console.log("toExponential -> " + y1.toExponential());
// Just getting back 2 decimals
console.log("toExponential -> " + y1.toExponential(2));

//Method -> toFixed(#)
	//Rounding the values
console.log("toFixed -> " + y1.toFixed(0)); //10
console.log("toFixed -> " + (9.456).toFixed(0)); //9

//Method -> toPrecision()
	//When we tell it to return it with a specified length
console.log("toPrecision -> " + y1.toPrecision(2)); 

//Method -> valueOf()
	//Make sure we get back a number
console.log("valueOf -> " + x.valueOf());

//Method -> Converting variables to Number
	//Number()
var result = true;
console.log(Number(result)); //1 -> true
							 //0 -> false
console.log("Number() -> " + Number("10")); //10
console.log("Number() -> " + Number("10 years")); //NaN
console.log("Number() -> " + Number("10 20")); //NaN

//Method -> parseInt()
console.log("parseInt() -> " + parseInt(result)); //NaN
console.log("parseInt() -> " + parseInt("10")); //10
console.log("parseInt() -> " + parseInt("10 years")); //10
console.log("parseInt() -> " + parseInt("10 20")); //10
console.log("parseInt() -> " + parseInt("years 10")); //NaN

//Method -> parseFloat()
console.log("parseFloat() -> " + parseFloat(result)); //NaN
console.log("parseFloat() -> " + parseFloat("10")); //10
console.log("parseFloat() -> " + parseFloat("10 years")); //10
console.log("parseFloat() -> " + parseFloat("10 20")); //10
console.log("parseFloat() -> " + parseFloat("years 10")); //NaN

//Method -> Number Properties 
	//Biggest number value for Javascript
console.log("Max value of JS Number -> " + Number.MAX_VALUE);
	//Smallest number value for Javascript
console.log("Min value of JS Number -> " + Number.MIN_VALUE);
	//Biggest number value for Javascript
console.log("Positive infinity of JS Value -> " + Number.POSITIVE_INFINITY);
	//Biggest number value for Javascript
console.log("Negative infinity of JS Value -> " + Number.NEGATIVE_INFINITY);
	//NaN value for Javascripts
console.log("NaN value of JS Value -> " + Number.NaN);



