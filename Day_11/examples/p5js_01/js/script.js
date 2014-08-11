/* JavaScript here*/

var wHeight = window.innerHeight;
var wWidth = window.innerWidth;

/*How to create an object*/
var car;

var canvas1;

function setup() {
	canvas1 = createCanvas(wWidth, wHeight);
	canvas1.id("lemon");
	car = {
		p:{ /*position of the car*/
			x: random(width/3),
			y: random(height)
		},
		color: color()
	};
}

function draw(){
	
	ellipse(car.p.x, car.p.y,20,30);
}