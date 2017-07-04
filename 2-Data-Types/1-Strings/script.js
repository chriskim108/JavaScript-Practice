
var text = "John Doe";
var text_2 = "It's alright!!";

console.log(text, text_2);

// This will give the length of a particular string
console.log(text.length);

var text_3 = "John Doe"; //If we were to look at the "typeof" -> String
var x = new String("John Doe"); //If we were to look at the "typeof" -> Object
console.log(text_3, x);
// This will determine the typeof each variable is
console.log(text_3 + " -> " +  typeof(text_3));

console.log(x + " -> " + typeof(x));

// Checking if the text are equal to each other
console.log("x == text_3 -> " + (x == text_3)); //True

// This will check the typeof value
console.log("x === text_3 -> " + (x === text_3)); //False because not the same type

var y = new String("John Doe");
console.log("x == y -> " + (x == y)); //False
console.log("x === y -> " + (x === y)); //False because objects cannot be compared to other objects directly



