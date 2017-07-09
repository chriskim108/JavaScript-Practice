//While Loop

//A while loop will keep on running until the condition is true

//Syntax
/*
while(condition){
	execute block of code
}
*/


//Example 1
	//This will print out the 0 - 9
var i = 0;
console.log('------- while loop --------');
while (i < 10){
	console.log(i);
	//This value is necessary such that the values can be incremented
	i++;
}


//do-while loop will execute atleast once
//Example 2
var i = 11;
console.log('------- do while loop --------');
do {
	console.log(i);
	i++;
} while(i < 10);
