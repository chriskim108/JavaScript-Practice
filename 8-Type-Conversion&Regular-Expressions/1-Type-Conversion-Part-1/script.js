// Type Conversion
// 5 different types of data types
	//String
	//Number
	//Boolean
	//Object
	//Function
// 3 different types of object
	//Object
	//Date
	//Array
// 2 different types of none
	//Null
	//Undefined
// We also have a way to check what type of data type it is
	//typeof()



// Example: typeof()
console.log("John - " + typeof "John");//string
console.log("3.14 - " + typeof 3.14);//number
console.log("NaN - " + typeof NaN);//number
console.log("false - " + typeof false);//boolean
console.log("array - " + typeof [1,2,3,4]);//object
console.log("object - " + typeof {name: "John Doe", age: 25});//object
console.log("Date - " + typeof new Date('12/31/2016'));//object
console.log("function - " + typeof function() {});//function
console.log("myHouse - " + typeof myHouse);//undefined
console.log("null - " + typeof null);//null
// typeof() -> Is an operator like addition, multiplication, etc and returns a string



// Constructor
console.log("John - " + "John".constructor);
console.log("3.14 - " + 3.14.constructor);
console.log("Array - " + [1,2,3,4].constructor);



//This will tell us if something is an array or not
function isArray(myArray){
	//toString method is used in any data type and convert everything to a string
	return myArray.constructor.toString().indexOf("Array")>-1;
}
console.log(isArray(2.71));//false
console.log(isArray([1,3,5,2]));//true


