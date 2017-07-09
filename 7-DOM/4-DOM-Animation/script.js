//DOM Animation
//We can use the DOM Manipulation to animate 


//Example 1
	//When the button is clicked, this function will activate
function moveOn(){
	var smallBox = document.getElementById("animate");
	var initialPosition = 0;
	//Creating an interval
		//Every 5 millisecond we will update the frame
	var myInterval = setInterval(frame,5);
	//After every 5 millisecond it will increment by 1	
	function frame() {
		//This will restrict the small box from flying out of the bigger box 
		if(initialPosition == 250){
			clearInterval(myInterval);
		}
		//Out initialPosition will increment by one by adding one to the position
		initialPosition++;
		//This will make our box move diagonal	
			//This will move our box to the top
		smallBox.style.top = initialPosition + "px";
			//This will move our box to the left
		smallBox.style.left = initialPosition + "px";

	}
}











