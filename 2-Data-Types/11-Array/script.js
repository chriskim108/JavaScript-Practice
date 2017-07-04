//Arrays

var cars = ['Merc', //Index -> 0 
			"BMW", //Index -> 1
			"Fiat"] //Index -> 2
console.log(cars);
console.log(cars[1]);

cars.push("Volvo"); //Pushing into the array
console.log(cars[3]);

var cars2 = new Array("Nissan", "Subaru", "Chevy");
console.log(cars2);

//This is an object
var person = {
	firstName: "John",
	lastName: "Doe"
};
console.log(person.lastName);

//Inside an array we can have varibles of different types
var mixedArray = [];
mixedArray[0] = new Date('12/31/2016');
mixedArray[1] = function myFunction(){
};
mixedArray[2] = cars;
mixedArray[3] = person = {
	firstName: "John",
	lastName: "Doe"
};;


//Length Properties
console.log(cars.length);


//Sorting Properties
	//It will sort in respect to alphabet order
console.log(cars.sort());

//Look through the arrays
for(var i = 0; i<cars.length; i++){
	console.log(cars[i]);
}

//If we want to test if it is an array
console.log(Array.isArray(cars));
	//Another way of checking if the variable is an array
console.log(cars instanceof Array);






