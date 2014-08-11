/*JavaScript here*/

var myColor;

function changeColor() {
	var div = document.getElementById("colorBg");

	div.style.backgroundColor = "green";
	div.style.width = "200px";

	myColor = "#ff3c27";

	document.getElementById("color1").style.color = "red";
	document.getElementById("color2").style.color = myColor;
}

function changeColor2() {
	console.log(myColor);
}