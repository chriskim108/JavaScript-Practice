//DOM CSS
//We can use DOM Manipulation to change the CSS styling of the HTML file

//Example 1
	//We are selecting the ID sample and changing the color to blue
// document.getElementById("sample").style.color = "blue";
	//We are selecting the ID sample and changing the size
// document.getElementById("sample").style.fontSize = "20px";

//For DOM CSS Manipulation we would typically do it if there is an event involved
//Example 2
	//In this example the <p> tag will change when we roll our mouse over it
function myFunction(){
	document.getElementById("sample").style.color = "blue";
	document.getElementById("sample").style.fontSize = "20px";
}
	//When we pull out mouse out, it will change to the respected code of this function
function onMouseOutFunction(){
	document.getElementById("sample").style.color = "black";
	document.getElementById("sample").style.fontSize = "14px";
}