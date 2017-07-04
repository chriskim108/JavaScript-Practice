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


