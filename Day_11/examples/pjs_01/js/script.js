/* JavaScript here*/

var windowHeight  = window.innerHeight;
var windowWidth = window.innerWidth;

var canvas1;

function sketchProc(ps) {

	ps.setup = function() {
		ps.size(600, 300);

	};

	ps.draw = function() {

		ps.background(125);
		if(ps.mouseIsPressed){
			ps.fill(255,255,0);
		}else {
			ps.fill(255,0,0);
		}

	 	ps.ellipse(ps.mouseX, ps.mouseY, 20, 20);
	};

}

var canvas = document.getElementById("canvas1");  
//attaching the sketchProc function to the canvas  
var p = new Processing(canvas, sketchProc); 