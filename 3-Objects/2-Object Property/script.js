//Object Properties
	//Properties are values that are asscoiated with JavaScript object
	//There is no restriction to the order
var person = {
	firstName: "John",
	age: 30,
	lastName : "Doe",
	eyeColor: "Blue"
}

// enumerable, configurable, and writable

// 3 different ways of accessing a property
	// Method 1 - objectName.property
		// person.firstName
	// Method 2 - objectName['property']
		// person['firstName']
	// Method 3 - objectName[expression]
		// var x = "age";
		// person[x]
	// Method 4 - for-loop
		/*
		for (variable in object){
			code to be executed
		}
		*/
//Method 1 Examples
console.log(person.firstName);

//Method 2 Examples
console.log(person["lastName"]);

//Method 3 Examples
var x = "age"
console.log(person[x]);

//Method 4 Examples
var text = ""; 
for(y in person){
	text += person[y];
	text += " ";
}
console.log(text);

//Note
	//3 main things we can do in an object
		//Add
		//Deleting
		//Change

//Add
	//Adding a property onto the object
person.nationality = "English";
console.log(person.nationality);

//Deleting 
	// Deletes both the property and the value of the property
	// Only used in object properties, it has no affect on variables and functions
delete person.age;
console.log(person.age);

//Change
	// Changing the property value
person.nationality = "Korean";
console.log(person.nationality);






