
/*variable x = button*/
var x = document.getElementById("myButton");

/*add event listener, function that will run if ..*/
x.addEventListener("mouseover", myFunction);
x.addEventListener("click", mySecondFunction);
x.addEventListener("mouseout", myThirdFunction);


function myFunction() {
    document.getElementById("demo").innerHTML += "Moused over!<br>";
}

function mySecondFunction() {
    document.getElementById("demo").innerHTML += "Clicked!<br>";
}

function myThirdFunction() {
    document.getElementById("demo").innerHTML += "Moused out!<br>";
}

//-----------------------------------------------------------------------------
//This function writes to the body of the HTML (no specific element is being called)
document.write("Hello World!");
//-----------------------------------------------------------------------------
//This expression creates a <h1></h1> and a <h5></h5> (inside the html file> and writes into them.
document.write("<h1>I'm a header created from JS</h1><h5>I'm a smaller header created from JS</h5>");

function changeColor()
{
	var div = document.getElementById("colorBg");
	div.style.backgroundColor="black";
	div.style.width="200px";

  	document.getElementById("color1").style.color="red";
  	document.getElementById("color2").style.color="blue";
  	document.getElementById("color3").style.color="green";
  	document.getElementById("color4").style.color="orange";
  	document.getElementById("color5").style.color="yellow";
}

