//Booleans

	
//console.log(5 < 6); //true
//console.log(5 == 6); //false
	
//All Real values will return true
	//Will return true for anything that is a real value
console.log('-------- Real Values ---------');
console.log(Boolean(100)); //true
console.log(Boolean(3.14)); //true
console.log(Boolean(-5)); //true
console.log(Boolean(2+3+5)); //true
console.log(100 < 101); //true
console.log(Boolean("Hello")); //true
console.log(Boolean("false")); //true
	
//All non-Real values will return false
	//Will return false for anything that is not a real value
console.log('------- Non-Real Values -------');
var x = 0;
console.log(Boolean(x)); //false because it is a 0 
x = -0;
console.log(Boolean(x)); //false
console.log(Boolean("")); //false
var y;
console.log(Boolean(y)); //false
console.log(Boolean(null)); //false
x = 10 * "H";
console.log(Boolean(x)); //false
console.log(Boolean(false)); //false