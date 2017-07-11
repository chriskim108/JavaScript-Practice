//Error Object


//JavaScript has an error object that provides information when an errpr occurs
//A few things it can state is the 
	//Error and Message
	//EvalError = eval()
		//An error from the evaluation 
	//RangeError 
		// A number is out of range
	//ReferrenceError 
		// An illegal referrence has occured
	//SyntaxError 
		// A problem in the Syntax
	//TypeError 
		// When the type is incorrect
	//URIError 
		//When there is an error in the encodeURI method or function
		// Similar to URL but a format expressed as a string

//RangeError
var num = 1;
try{
	num.toPrecision(500);
} catch(err){
	document.getElementById("rangeErr").innerHTML = err.name;
}

//ReferrenceError
	//Since "y" is not declared this is considered illegal referrence
var num;
try{
	x = y + 1;
} catch(err){
	document.getElementById("refErr").innerHTML = err.name;
}

//SyntaxError
try{
	eval("alert('Hello)");
} catch (err){
	document.getElementById("synErr").innerHTML = err.name;	
}

//TypeError
var num = 1;
try{
	num.toUpperCase();
} catch (err){
	document.getElementById("typeErr").innerHTML = err.name;	
}

//URIError
try{
	decodeURI("%%%");
} catch (err){
	document.getElementById("URIErr").innerHTML = err.name;	
}