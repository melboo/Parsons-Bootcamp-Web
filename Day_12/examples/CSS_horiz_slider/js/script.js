/*JavaScript here*/

/*Welcome to jQuery*/

$(document).ready(function(){
    /*automatic scroll*/
    $('#contact-link').click(function() {
    	$('html, body').animate({
    	scrollTop: $("#contact").offset().top
		}, 1000);
    });
    $('#about-link').click(function() {
    	$('html, body').animate({
    	scrollTop: $("#about").offset().top
		}, 1000);
    });
    $('#work-link').click(function() {
    	$('html, body').animate({
    	scrollTop: $("#work").offset().top
		}, 1000);
    });
});
