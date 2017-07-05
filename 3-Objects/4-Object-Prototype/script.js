//Object Prototypes

//An example of Object Prototype
	//new Date() - Date.prototype

//This is creating our own prototype	
	//Seperated by semi-colon instead of comma
function Person(first, last, age, eyeColor) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyeColor;
}
// Creating new objects using the self made prototype	
	// Using the prototype person to define our objects
var myFather = new Person("John", "Smith", 40, "black");
var myMother = new Person("Sally", "Smith", 40, "blue");
	//Adding a property to an object
myFather.nationality = "English";
	//Adding a method to an object
myFather.name = function() {
	return this.firstName + " " + this.lastName;
}

// This will not work 
//Person.nationality = "English"; //We should not add a property like this to a prototype 


// There are 2 main ways we may add a property to a prototype
	//Method 1
		//Directly inside the function
function Person(first, last, age, eyeColor) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eyeColor = eyeColor;
	this.nationality = "English";
	this.name = function() {
		return this.firstName + " " + this.lastName;
	}
}
	//Method 2
		//Inserting through it
Person.prototype.nationality = "English"; //This is show we should assign a property to a prototype
Person.prototype.name = function() { //Another example on adding property to a prototype
	return this.firstName + " " + this.lastName;
}
	
// Checking out the results
console.log("---"+ myMother.nationality);
console.log("---"+ myMother.name());


