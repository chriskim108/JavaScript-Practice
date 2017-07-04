var x = 34.00 // A number with decimals
x = 34 // An integer value
x = 123e5 // 12300000
x = 123e-5 // 0.00123

// Notes
// 0 - 51 (bits) -> Number
// 52 - 62 (bits) -> Exponent
// 63 (bits) -> Sign  
var x1 = 999999999999999; //15 times 9
var x2 = 9999999999999999; //16 times 9 
//In Javascript if its not an exponent, it can go only up to 15 
console.log(x1,x2);

//Javascript has computational error
var x3 = 0.2 + 0.1;
console.log(x3);
//This will fix the error
var x3 = (0.2*10 + 0.1*10)/10;
console.log(x3);

//Binary -> To base of 2
//Hexadecimal -> To the base of 16
//Octal -> To the base of 8
//Decimal -> To the base of 10
var x4 = 128;
// Converting to Hexadecimal format
	//Convert to a string and give it a base
console.log("Hexadecimal value is -> " + x4.toString(16));
console.log("Octal value is -> " + x4.toString(8));
console.log("Binary value is -> " + x4.toString(2));

//Assigning a hexadecimal value
var hexa = 0xFF; //255
console.log(hexa);
console.log("Decimal value is -> " + hexa.toString(10));

//Infinity
	//If we give javascript a really huge value, it will automatically declare as infinity
	//If we divide by 0, it will return infinity
var x5 = 2/0;
console.log("Infinity Test -> " + x5);
	//If we want a negative infinity
var x5 = -2/0;
console.log("Infinity Test -> " + x5);
console.log(typeof(Infinity)); //Number


//Nan -> Not a Number
var x6 = 100/"Hundred";
console.log(x6); //NaN
	//This will test if it is NaN
console.log(isNaN(x6)) //True

var x7 = 100/"100";
console.log(x7); //1
console.log(isNaN(x7)) //False

var x8 = NaN;
var x9 = "5";
var x10 = x8 + x9;
console.log(x10); //NaN5
console.log(typeof(NaN)); //Number

//Numbers can be Objects
var x11 = new Number(10);
var x12 = 10;
console.log(typeof(x11)); // Object Type
console.log(typeof(x12)); // Number Type


