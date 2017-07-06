//Comparison and Logical Operators

//Comparison
	// greater than (>)
	// less than (<)
	// greater than or equal to (>=)
	// less than or equal to (<=)
	// equal to (==)
	// equal to value and type (===)
	// not equal (!=)
	// not equal value or not equal type (!==)
var x = 5;
	
//greater than (>)
console.log("x > 8 = "+(x > 8)); //false
console.log("x > 4 = "+(x > 4)); //true
console.log("x > 5 = "+(x > 5)); //false
//less than (<)
console.log("x < 8 = "+(x < 8)); //
console.log("x < 4 = "+(x < 4));
//greater than or equal to (>=)
console.log("x >= 8 = "+(x >= 8));
console.log("x >= 4 = "+(x >= 4));
console.log("x >= 5 = "+(x >= 5));
//less than or equal to (<=)
console.log("x <= 8 = "+(x <= 8));
console.log("x <= 4 = "+(x <= 4));
console.log("x <= 5 = "+(x <= 5));
	
//equal to (==)
console.log("x == 8 = "+(x == 8));
console.log("x == 5 = "+(x == 5));
console.log("x == 5 = "+(x == "5"));
//equal to value and type (===)
console.log("x === 8 = "+(x === 8));
console.log("x === 5 = "+(x === 5));
console.log("x === 5 = "+(x === "5"));
//not equal (!=)
console.log("x != 8 = "+(x != 8));
console.log("x != 5 = "+(x != 5));
console.log("x != 8 = "+(x != "8"));
//not equal value or not equal type (!==)
console.log("x !== 8 = "+(x !== 8)); //
console.log("x !== 5 = "+(x !== 5)); //
console.log("x !== 8 = "+(x !== "8")); //
console.log("x !== 5 = "+(x !== "5")); //true

// Logical Operators
	// if Statement
	// else-if Statement
	// else Statement
	// And (&&)
	// Or  (||)
	// !   (!)
	// Ternary Operator
	
var age = 20;
var gender = "female";
if (age < 18 && gender == "male") {
	console.log('Bro! Too Young!');
} else if (age < 18 && gender == "female"){
	console.log('Sis! Too Young!');
} else if (age >= 18 && gender == "male"){
	console.log('Bro! You are grown up man!');
} else if (age >= 18 && gender == "female"){
	console.log('Sis! You are grown up woman!');
}
	
//Logical And  --> true && true == true
//Logical Or   --> false || true == true
//Logical !    --> !(false) == true --> !(true) = false
	
if (age < 18 || age > 65) {
	console.log('Child and an Old person are the same');
} else {
	console.log('Neither a child or an old person');
}
	
//Ternary Operator
	//variableName = (condition) ? value1 : value2;
		// In this case if the "condition" is true
			// "value1" will be executed
		// If the "condition" is false
			// "value2" will be executed
//Example 1
age = 10;
var voteAge =(age <= 18) ? "You are too young" : "You are old enough to vote"; 
console.log("Checking if the person is old enough to vote -> " + voteAge);


//Example 2
	//In one of the values we can use a function()
age = 10;
var voteable = (age < 18) ? myfunction() : "Old Enough to vote!";
console.log("voteable = "+ voteable);

function myfunction(){
	//do some complex logic here...
	return "the Answer is here";
}