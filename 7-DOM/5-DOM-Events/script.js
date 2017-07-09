// DOM Events
// The events when either a user clicks the mouse or the webpage has been loaded
// 


//The "this" keyword will pass it in to the "element"
function changeText(element) {
	element.innerHTML = 'Oucch!';
}


//Giving the button the onclick event though JavaScript
	//We do not always have to depend on the html to call onto the event
document.getElementById('buttonClick').onclick = changeButtonText;

function changeButtonText() {
	document.getElementById('buttonClick').innerHTML = "I was clicked";
}


//onload and onunload
//This will check for cookies
function checkCookies() {
	var text = "";
	//"navigator" is a keyword
	if(navigator.cookieEnabled) {
		text = "Cookies are enabled!";
	} else {
		text = "Cookies are not enabled!";
	}
	//Once the logic is complete we will manipulate the <p> tag
	document.getElementById('cookiePara').innerHTML = text;
}








