/*JavaScript here*/

/*Welcome to jQuery*/

$(document).ready(function(){
	/*logo animation*/
    $('#logo1').each(function() {
        animationHover(this, 'bounce');
    });
    $('#logo2').each(function() {
        animationClick(this, 'shake');
    });
    $('#logo3').each(function() {
        animationClick(this, 'swing');
    });

    /*automatic scroll*/
    $('#contact-link').click(function() {
    	$('html, body').animate({
    	scrollTop: $("#contact").offset().top
		}, 1000);
    });
});

/*on object hover*/
function animationHover(element, animation){
  element = $(element);
  element.hover(
    function() {
      element.addClass('animated ' + animation);
    },
    function(){
      //wait for animation to finish before removing classes
      window.setTimeout( function(){
        element.removeClass('animated ' + animation);
      }, 2000);
    }
  );
};

/*on object click*/
function animationClick(element, animation){
    element = $(element);
    element.click(
        function() {
            element.addClass('animated ' + animation);        
            //wait for animation to finish before removing classes
            window.setTimeout( function(){
                element.removeClass('animated ' + animation);
            }, 2000);         
  
    });
}