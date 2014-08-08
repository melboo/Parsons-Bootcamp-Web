//-----------------------------------------------------------------------------
//This function writes to the body of the HTML (no specific element is being called)
document.write("Hello World!");
//-----------------------------------------------------------------------------
//This expression creates a <h1></h1> and a <h5></h5> (inside the html file> and writes into them.
document.write("<h1>I'm a header created from JS</h1><h5>I'm a smaller header created from JS</h5>");
//-----------------------------------------------------------------------------
//This function gets the element with the id=div1 and writes into it.
function getElement(){
	var element = document.getElementById("div1").innerHTML = "I'M INSIDE A DIV!";
}
getElement();
//-----------------------------------------------------------------------------
//Count all the <p> elements in the html
var tagNum = 0;
function getTag(){
	var tagName = document.getElementsByTagName("p");
	tagNum = tagName.length;
	var counted = document.getElementById("countResults");
	counted.innerHTML = "There are " + tagNum + " paragraphs tags in this website";
	counted.style.fontSize = "30px";
	counted.style.backgroundColor = "#00FF00";
	counted.style.width = "530px";
}
//-----------------------------------------------------------------------------
//When the link in the html is clicked, change the color of the fonts
function changeColor()
{
	var div = document.getElementById("colorBg");
	div.style.backgroundColor="#000000";
	div.style.width="200px";

  	document.getElementById("color1").style.color="#FF0000";
  	document.getElementById("color2").style.color="#FFFF00";
  	document.getElementById("color3").style.color="#339933";
  	document.getElementById("color4").style.color="#0000FF";
  	document.getElementById("color5").style.color="#FF6600";
}