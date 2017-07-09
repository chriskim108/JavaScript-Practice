// DOM Elements

// Various ways of selecting an element
	//id
	//tag name
	//class name
	//CSS selector
	//HTML object collections

//id
var sampleID = document.getElementById("sampleID");
console.log(sampleID);

//tag name
var sampleTagName = document.getElementsByTagName("sample");
console.log(sampleTagName);

//class name
var sampleClass = document.getElementsByClassName("sampleClass");
console.log(sampleClass);

//CSS Selector
var x = document.querySelectorAll("p.sample");
console.log(x);

//HTML Object Collections
function myFunction(){
	//Select eh form document
	var formText = document.forms["form1"];
	//An empty collection so we may input all our strings here
	var text = "";
	for(var i = 0; i < formText.length; i++){
		//All the values from the empty collections will be stored in here with the elements
		text += formText.elements[i].value + "<br>";
	}
	//Once the button is clicked we will manipulate the <p> tag with the id="formContent"
	document.getElementById("formContent").innerHTML = text;
}