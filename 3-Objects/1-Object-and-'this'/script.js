//Object and 'this'

// Note:
// Object in JS
	// Booleans
	// Numbers
	// Strings
	// Dates
	// Math
	// Regular Expressions
	// Array
	// Functions
	// Objects
// Primitives in JS
	// String
	// Boolean
	// Number
	// Null
	// Undefined






	
// Objects in JS
var x1 = new Boolean(); //Booleans
var x2 = new Number(); //Numbers
var x3 = new String(); //Strings
var x4 = new Date(); //Dates
//Maths cannot be declared by using the 'new' keyword
var x5 = new RegExp(); //Regular Expressions
var x6 = new Array(); //Arrays
var x7 = new Function(); //Functions
var x8 = new Object(); //Objects
	
var personS = "John Doe";
var person = {	
				firstName: 'John', 
				lastName: 'Doe', 
				age: 30, 
				eyeColor: 'blue',
				fullName: function() {
					return this.firstName + " " + this.lastName;
				}
			 };

//PHP - Associative Arrays
//Python - Dictionaries
//C - Hash Tables
//Java - Hash Maps
//Ruby & Perl - Hashes 


// If you give a variable in an object it is called a property




//Primitives in JS
//string
//boolean
//number
//null
//undefined
	
// There are 3 ways of creating an object
	// Object Literal
	// new Keyword
	// Constructor

// Object Literal
var personSmarter = {
						firstName: 'John', 
						lastName: 'Doe', 
						age: 30, 
						eyeColor: 'blue'
					};

// new keyword
var personSmarterThanSmarter = new Object();
personSmarterThanSmarter.firstName = "John";
personSmarterThanSmarter.lastName = "Doe";
console.log("Smarter than you firstName -> " + personSmarterThanSmarter.firstName);
console.log("Smarter than you lastName -> " + personSmarterThanSmarter.lastName);

// Construtor
function person(first, last, age, eye) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.eye = eye;
};
	
var mother = new person("Jenny", "Doe", 70, "black");
var father = new person("Jim", "Doe", 70, "black");
	
	
