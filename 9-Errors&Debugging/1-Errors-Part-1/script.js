//Try-Catch Statements

//There a few ways of handling an error
	//We can put multiple print statements to find where the error is
	//We can use "try-catch" statement 
//Try-Catch
	//Syntax
	/*
	try{
		Some Code
	} catch(err){
		Block of code to handle the error
	}
	*/
//Example 
	//If the code is successful then the it will run the "try" otherwise it will run catch
// try{
// 	alert("Hello World");
// } catch(err){
// 	document.getElementById("ErrorMessage").innerHTML = err.message;
// }



//throw statement 
	//If a code is true we can throw a message or code to the catch and compile that specific code
//Example
// function myFunction(){
// 	var message, x;
// 	message = document.getElementById("message");
// 	message.innerHTML = "";

// 	x = document.getElementById("example").value;
// 	try{
// 		if(x == "") throw "empty";
// 		if(isNaN(x)) throw "Not a Number";
// 		x = Number(x);
// 		if(x<5) throw "Too Low";
// 		if(x>10) throw "Toow High";
// 	} catch(err){
// 		message.innerHTML = "Input is " + err;
// 	}
// }



// finally Statement
	// This lets you execute the code after try and catch regardless the result


function myFunction(){
	var message, x;
	message = document.getElementById("message");
	message.innerHTML = "";

	x = document.getElementById("example").value;
	try{
		if(x == "") throw "empty";
		if(isNaN(x)) throw "Not a Number";
		x = Number(x);
		if(x<5) throw "Too Low";
		if(x>10) throw "Toow High";
	} catch(err){
		message.innerHTML = "Input is " + err;
	} finally {
	document.getElementById("finallyExample").innerHTML = "Finally Executing";
	}
} 