/* JavaScript here*/

var windowHeight  = window.innerHeight;
var windowWidth = window.innerWidth;

var canvas1;

function setup() {
	canvas1 = createCanvas(600, 400);
	canvas1.id("myCanvas1");

}

function draw() {
	background(125);
	if(mouseIsPressed){
		fill(255,255,0);
	}else {
		fill(255,0,0);
	}

 	ellipse(mouseX, mouseY, 20, 20);
}
