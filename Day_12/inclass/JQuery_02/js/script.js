/*JavaScript here*/


$(document).ready(function(){
	$("#logo3").each(function(){
		animationClick(this, "swing");
	});
});


function animationClick(element, animation){
	element = $(element);
	element.click(
		function() {
			element.addClass('animated ' + animation);
			window.setTimeout( function() {
				element.removeClass('animated ' + animation);
			}, 2000);
		});
};