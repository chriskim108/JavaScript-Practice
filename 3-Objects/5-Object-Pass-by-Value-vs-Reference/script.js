//Pass By Value vs Pass by Reference


//Pass By Value
	//It affects all the primitive types such as strings, numbers, etc
	//We are just simply passing in the value of x into the function, however in this case
	//it cannot be used because it is not returning anything
	//We are passing the value of x into the function
function changeValue(item){
	console.log("item1 = " + item);//item1 = 1
	item = 2;
	console.log("item2 = " + item);//item2 = 2
}
var x = 1;
console.log(x); // 1
changeValue(x);
console.log(x); // 1


//Pass By Reference
	//In this example we are passing the 'y' as an object to the function 
	//We are passing the objects reference to that
		//This states that we have 2 references now 
			//One outside the function 
			//One inside the function
function changeValueAgain(item){
	console.log("item3 = " + item); //item3 = [object Object]
	item.value = 2;
	console.log("item4 = " + item); //item4 = [object Object]
}
var y = {value: 1};
changeValueAgain(y);
console.log(y.value); //2



//Summary 
	//If we were to update any object's property to something, it would be consider 
		//Pass By Value
	//If we initialize it to something else like a new object