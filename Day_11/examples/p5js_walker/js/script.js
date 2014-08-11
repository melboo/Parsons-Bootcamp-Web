/* JavaScript here*/

var wHeight = window.innerHeight;
var wWidth = window.innerWidth;

/*How to create an object*/
// var w;

//if array
var w = [];
//walker numbers
var wNum = 200;

var canvas1;

function setup() {
	canvas1 = createCanvas(wWidth, wHeight);
	canvas1.id("lemon");

	//w = new Walker(); //create walker, no parameters inside

	for(var i = 0; i < wNum; i++){
		w[i] = new Walker();
	}

}

function draw() {
	//draw and update walker
	// w.update();
	// w.draw();

	//loop over array
	for(var i = 0; i < w.length; i++){
		w[i].update();
		w[i].draw();
	}
}

function Walker(){
//Constructor
this.x = width/2;
this.y = height/2;
}

Walker.prototype.draw = function() {
	ellipse(this.x, this.y, 1, 1);
}; //check strichpunkt

Walker.prototype.update = function() {
	//step each option has a 25% chance. probability
	// var choice = parseInt(random(4)); //random number 0,1,2,3

	// if(choice === 0) {
	// 	this.x++;
	// } else if(choice === 1){
	// 	this.x--;
	// } else if(choice === 2){
	// 	this.y++;
	// }else {
	// 	this.y--;
	// }

	// /*if wanna control more*/
	var choice = random(1);

	if(choice < 0.4) { //40% chance 0 - .4
		this.x = x+4;
	} else if(choice < 0.6){ //20% between .4 - .6
		this.x--;
	} else if(choice < 0.8){ //20% between .6 - .8
		this.y++;
	}else {
		this.y--; //20% going up / rest
	}

	this.x = constrain(this.x, 0, width-1);
	this.y = constrain(this.y, 0, height-1);

};