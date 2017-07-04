//Array Methods


var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
	//Printing out the seperator
		//Comma
console.log('toString = '+ fruits.toString());
		//Middle Slash
console.log('join = '+ fruits.join(' | '));
	
//Push and Pop
	//Add "Kiwi"
fruits.push('Kiwi');
console.log('push = '+ fruits);
	//Removes "Remove Kiwi"
fruits.pop();
console.log('pop = '+ fruits);
	
//Shift and Unshift
	//Shift
		//Remove the first element  ("Banana")
fruits.shift()
console.log('shift = '+ fruits);
	//Unshift
		// Adding to the first element
fruits.unshift('Banana')
console.log('unshift = '+ fruits);
	
//Change elements
	//Reassignment
fruits[0] = 'Kiwi';
console.log('Change = '+ fruits);
fruits[fruits.length] = 'Banana';
console.log('At end = '+ fruits);
	
//delete
delete fruits[0]; //Will delete the first element and replace it with undefined
console.log('delete = '+ fruits);


//splice
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
	//Choosing the second position and adding in new strings "Lemon", "Kiwi"
fruits.splice(2, 0, 'Lemon', 'Kiwi');
console.log('splice = '+ fruits);
	
fruits.splice(0,1); //This will remove at the index 0
console.log('splice remove = '+ fruits);
	
//Join
	//Combining two more arrays into one
var array1 = ['Tom', 'John'];
var array2 = ['Smith', 'Jessi'];
var array3 = ['Bob', 'Rocky'];
var myArray = array1.concat(array2, array3);
console.log(myArray);
console.log('');
	//Alternative
var myArray2 = array1 + "," + array2 + "," + array3;
console.log(myArray2);
	
//slice
fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
var fruits2 = fruits.slice(1); //"Orange", "Apple", "Mango"
console.log(fruits2);
var fruits3 = fruits.slice(1,3); //"Orange", "Apple"
console.log(fruits3);