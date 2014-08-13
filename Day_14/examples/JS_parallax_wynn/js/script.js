/*JavaScript here*/

function parallex() {
	var layer1 = document.getElementById("layer1");
	var layer2 = document.getElementById("layer2");
	//page X = mouse X
	layer1.style.right = -(event.pageX / 40)+"px";
	console.log(window.pageYOffset);
	layer2.style.top = -(event.pageX / 8) + "px";
}

window.addEventListener("mousemove", parallex);