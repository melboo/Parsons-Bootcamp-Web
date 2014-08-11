/*JavaScript here*/

function parallax(){
	var layer1 = document.getElementById("layer01");
	var layer2 = document.getElementById("layer02");
	layer1.style.top = -(window.pageYOffset / 40)+'px';
	console.log(layer1.style.top);
	layer2.style.top = -(window.pageYOffset / 8)+'px';
}
window.addEventListener("scroll", parallax);

