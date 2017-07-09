// Event Handlers

// A listener is just awaiting for an action to happen
// Once that action happens it will call onto the assigned function



// addEventListener()
	// This method attaches an event handler to the specified element
	// This attaches an event handler to an element without overriding an existing event handler
		// Just adds onto it
	// Example:
		// If you want the user to double click on something
// removeEventListener()
	// This will remove the event listener
// addEventListener() Syntax
	// element.addEventListener(event, function, useCapture);



//Example 1
	//If the button is clicked it will print out "Hello World"
// var element = document.getElementById("clickMe").addEventListener("click", function(){alert("Hello World")});



//Example 2
	//Making the function verison of example 1
// var element = document.getElementById("clickMe");
// element.addEventListener("click", callMyFunction);
// function callMyFunction(){
// 	alert("Hello World")
// }



//Example 3
	//Applying more than one function
// var element = document.getElementById("clickMe");
// element.addEventListener("click", callMyFunction);
// element.addEventListener("click", callMyFunction2);
// element.addEventListener("mouseover", callMyFunction3);


// function callMyFunction(){
// 	alert("Hello World");
// }

// function callMyFunction2(){
// 	console.log("You have been alerted");
// }

// function callMyFunction3(){
// 	console.log("Get off me");
// }


//Example 4
	//We are not using an element but directly the window object
	//If it is getting resized, call the function "callResize"
// window.addEventListener("resize", callResize);

// function callResize(){
// 	document.getElementById("windowTest").innerHTML = Math.random();
// }


//Example 5
	//We can pass into the parameter of the "callResize" function
		//We can pass into it by creating an anonymous
var count = 0;
window.addEventListener("resize", function(){callResize(count);});

function callResize(){
	document.getElementById("windowTest").innerHTML = count++;
}



// There are 2 ways for an event propagation in the HTML DOM
	//Bubbling 
	//Capturing
// Event propagation is a way on defining the element order when an event occurs
	// What happens when an event occurs

//Bubbling 
	//The inner most element will happen first
	//Example
		//<div><p></p></div>
			//The <p> will called the first and the <div> elements will be called second
//Capturing 
	//The outer most element will happen first
	//Example
		//<div><p></p></div>
			//The <div> will called the first and the <p> elements will be called second
//It will be determined by using the "useCapture"
	// element.addEventListener(event, function, useCapture);
		//The "useCapture" is a boolean type
			// true -> capturing
			// false -> bubbling
				//By default it is using bubbling



//removeEventListener() 
	//If we want to remove and event the command is similar to addEventListener()

//Example 6
	//Applying the removeEventListener() onto a function
	//After clicking once the 
		// "You are alerted" has been removed from the console (callMyFunction2)
var element = document.getElementById("clickMe");
element.addEventListener("click", callMyFunction);
element.addEventListener("click", callMyFunction2);
element.addEventListener("mouseover", callMyFunction3);


function callMyFunction(){
	alert("Hello World");
}

function callMyFunction2(){
	console.log("You have been alerted");
	element.removeEventListener("click", callMyFunction2);
}

function callMyFunction3(){
	console.log("Get off me");
}


