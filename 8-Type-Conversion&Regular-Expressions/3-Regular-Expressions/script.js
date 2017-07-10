//Regular Expression
	// A sequence of characters that form a search pattern
	// When you search for data in a text, you can use the search pattern to find what you are seeking
	// It can be either a single character or complex amount of characters
//Syntax
/*
	/pattern/modifier
*/

//Example 1
var word = "Hello There!"; 
var n = word.search(/There/);
var error = word.search("World");
//Returns 6 because it starts at the 6th position
console.log(n);
//Returns -1 because it does not exist
console.log(error);

//Example 2
var word2 = "My name is Chris";
// The "i" is a modifier
	// The "i" stands for case insensitive
	// This will convert everything to lowercase and compare them
var wordValueSearch = word2.search(/NaMe/i);
console.log(wordValueSearch);

//This will replace "Chris" to "Mike" 
var x = word2.replace("Chris", "Mike");
console.log(x);

//Same logic as example 2
var x = word2.replace(/chris/i, "Sandy");
console.log(x);


// Modifiers
	// 'i'
		//Case-Insensitive
			// Disregards of the case sentivity
	// 'g'
		//Global Matches
			// Looks globally for the keyword
	// 'm'
		// Multiline match
			// If your string spreads multiple lines it will take in consider of the other lines

// Patterns
	// [abc] -> Letter
	// [0-9] -> Numbers
	// (x|y) -> Either x or y

// test()
	// A regular expression method it searches for a string or pattern and returns true or false
//Example 
var pattern = /e/;
console.log(pattern.test("The best things in life are free"));		

//exec()
	//Similar to test() however, it will return the character we are looking for
//Example
var pattern = /best/;
console.log(pattern.exec("The best things in life are free"));	