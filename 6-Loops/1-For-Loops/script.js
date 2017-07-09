//For-Loops

// In JavaScript there are 4 main types of loops
	//for
	//for/in
	//while
	//do/while

//Syntax 
	//For-Loop
/*
for(statement1; statment2; statement3){
	code block to be executed
}
*/

//Example 1
	//This will print out 1 - 10
for(i=1; i<=10; i++){
	console.log(i);
}

//Example 2
	//This will print out each element of the array
var cars = ['BMW', 'Merc', 'Ford', 'Honda']
for(i=0, len = cars.length ; i<len; i++){
	console.log(cars[i]);
}

//i--
//i+10
//i*2 + 10

//Example 3
	//This will print out each element of the object
var person = {firstName: "John", lastName:"Ra", age: 25, maidenName: "Smith"};
for(x in person){
	console.log(x + " = " + person[x]);
}