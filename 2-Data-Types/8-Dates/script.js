//Date -> http://currentmillis.com/

document.getElementById('dateField').innerHTML = new Date();

	//Getting the milisecond on this http://currentmillis.com/
document.getElementById('dateField1').innerHTML = new Date(1498972225423);

	//mm/dd/yy
document.getElementById('dateField2').innerHTML = new Date('12/30/2017');

	//Years, months, days, hours, minutes, seconds
		//For the months it starts at 0 - 11
document.getElementById('dateField3').innerHTML = new Date(2016, 11, 31, 12, 32);


var date_Info = new Date();
document.getElementById('dateField4').innerHTML = date_Info;

	//This will just give the dates
document.getElementById('dateField4').innerHTML = date_Info.toDateString();




