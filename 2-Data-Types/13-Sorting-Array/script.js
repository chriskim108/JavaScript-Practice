//Sorting Arrays
var fruits = ['Banana', 'Apple', 'Orange', 'Mango'];
	//This will sort the array
		//Ascending
console.log(fruits.sort());
	//This will sort the array in the reverse order
		//Descending
console.log(fruits.reverse());
	

var points = [40, 100, 1, 5, 25, 10, 15];
	//Compare function
		//Ascending Order
		//When we have numeric value
points.sort(function(a,b){return a - b});
console.log(points);
		//Example
			//40, 100
				//return -60
			//100, 1
				//return 99
	
console.log('lowest element = '+ points[0]);
console.log('highest element = '+ points[points.length-1]);

	//Compare function
		//Descending Order
points.sort(function(a,b){return b - a});
console.log(points);
console.log('Highest element = '+points[0]);
console.log('Lowest element = '+points[points.length-1]);
	


//Randomize
console.log("Randomize")
//This will produce a value of random arrays
points.sort(function(a,b){return 0.5 - Math.random()});
console.log(points);
	
var cars = [
	{name: 'Volvo', year: 2015},
	{name: 'Merc', year: 2011},
	{name: 'BMW', year: 2013},
];
	
//Sorting based of numberic object param
console.log(cars);
	//Sorting the array based on the year
cars.sort(function(a, b){return a.year - b.year});
console.log(cars);
	
//Sorting based of string object param
cars.sort(function(a,b){
	//Converting all the strings to lowercase
	var x = a.name.toLowerCase();
	var y = b.name.toLowerCase();

	if(x < y) {
		return -1
	};
	if (x > y) {
		return 1
	};
	return 0;
});
console.log(cars);

