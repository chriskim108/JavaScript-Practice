// Object Methods

// Defining an object method
	// methodName: function(){code here}
// Accessing the object method
	// objectName.methodName()

var person = {
	firstName: "John",
	lastName: "Doe",
	age: 30,
	eyeColor: "Blue",
	fullName: function(){
		return this.firstName + " " + this.lastName;
	}
};
console.log(person.fullName()); // John Doe


//Example when user inputs a name
var myPerson = {
	firstName: String,
	lastName: String,
	age: Number,
	fullName: function(){
		return this.firstName + " " + this.lastName + " " + this.age;
	}
};
console.log(myPerson.firstName = "Christopher", myPerson.lastName = "Kim");