var text = "Find me if you can, me also can be here";
console.log(text.length);

//Method -> "indexOf()"
	//Looking through the text and finding "me"
	//This one would find the first "me"
console.log("me word is at position - " + text.indexOf("me"));

	//This one would find the last "me"
console.log("me word is at position - " + text.lastIndexOf("me"));

	//If it does not exist it should produce "-1"
console.log("tree word is at position - " + text.indexOf("tree"));

//Method -> "search()"
	//Similar to "indexOf()"
	//Search has more power in searching things
console.log("me word is at position using search() - " + text.search("me"));
	
//Method -> slice(start, end)
var fruits = "Apple, Banana, Kiwi";
	//Get the slice of fruits
console.log("Slice in action - " + fruits.slice(7,13));
console.log("Slice in action with negative parameter - " + fruits.slice(-12,-6));

//Method -> substring(start, end)
	//substring does not allow negative indexes
console.log("Substring in action - " + fruits.substring(7,13));

//Method -> substr(start,length)
console.log("Substr in action - " + fruits.substr(7,6));

//Method -> replace("The one you want to replace", "What you want to replace it with")
console.log("Before replace in action - " + fruits);
var fruitsUpgrade = fruits.replace("Kiwi", "Oranges");
console.log("Replace in action - " + fruitsUpgrade);

//This wll replace the first "me"
var you = text.replace("me", "you");
console.log("Replace in action with one 'me' - " + you);

//This wll replace all the "me"
var you = text.replace(/me/g, "you");
console.log("Replace in action with all 'me' - " + you);

//Method -> ToLowerCase() or ToUpperCase()
	//ToLowerCase() 
		//Will make everything lowercase
console.log(text.toLowerCase());
	//ToUpperCase()
		//Will make everything uppercase	
console.log(text.toUpperCase());
	
//Method -> Concatatination
	//When we are concatinating the strings
var x = "Hello";
var y = "World";
var z = x.concat(" ",y);	
var z1 = x + " " + y;
console.log(z, z1);

//Extracting String Characters
	//charAt(Number of index)
	//Accessing the specific index of the string
console.log("Testing charAt() - " + x.charAt(0));
	//This is stating what value it is on the ASCII table (DEC)
console.log("Testing charCodeAt() - " + x.charCodeAt(0));

//Method -> Split
	//This will take in a string and split it into specific indexes respected to the ","
	//When seeing the "," it will split it into different memory of the array
var fruitsArray1 = fruits.split(",");
console.log("Splitting it based on ',' - " + fruitsArray1);

var fruitsArray2 = fruits.split(" ");
console.log("Splitting it based on spaces - " + fruitsArray2);

var fruitsArray3 = fruits.split("a");
console.log("Splitting it based on 'a' - " + fruitsArray3);