/*JavaScript here*/

function parallex() {
	var layer1 = document.getElementById("layer1");
	var layer2 = document.getElementById("layer2");

	layer1.style.top = -(window.pageYOffset / 40)+"px";

	layer2.style.top = -(window.pageYOffset / 8) + "px";
}

window.addEventListener("scroll", parallex);