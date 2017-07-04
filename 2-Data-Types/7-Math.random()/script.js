//Math.random()

var x = Math.random();
console.log(x);
	//This will produce a value from 0 - 9
console.log(Math.floor(x * 10));

	//This will produce a value from 0 - 10
console.log(Math.floor(x * 11));

	//This will produce a value from 0 - 99
console.log(Math.floor(x * 100));

	//This will produce a value from 0 - 99
console.log(Math.floor(x * 100));

	//This will produce a value from 1 - 10
console.log(Math.floor(x * 10)+1);

function generateRandom(min, max){
	return Math.floor(Math.random() * (max-min)) + min;
}

//Example: 0-10 
function generateRandomBoth(min, max){
	return Math.floor(Math.random() * (max-min+1)) + min;
}





