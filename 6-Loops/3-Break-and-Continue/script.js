//Break and Continue


//Example 1
console.log('-------- Break ---------- ');
var text = "";
//This will print out 0,1,2
for(i = 0; i < 10; i++){
	if(i == 3) {
		break;
	}
	text = text + i + ",";
}
console.log(text);


//Example 2
text = "";
console.log('-------- Continue ---------- ');
//This will print out 0,1,2,4,5,6,7,8,9
for(i = 0; i < 10; i++){
	if(i == 3) {
		continue;
	}
	text = text + i + ",";
}
console.log(text);


//Example 3
//Labels
//Name : {}
text = "";
var cars = ['BMW ', 'Merc ', 'Ford ', 'Honda '];
console.log('-------- label ---------- ');
//This will print out BMW Merc Ford
list: {
	text += cars[0];
	text += cars[1];
	text += cars[2];
	break list;
	text += cars[3];
	text += cars[4];
	text += cars[5];
	text += cars[6];
	text += cars[7];
	text += cars[8];
}
console.log(text);