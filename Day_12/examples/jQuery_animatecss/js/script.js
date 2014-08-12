/*JavaScript here*/

/*Welcome to jQuery*/

$(document).ready(function(){
    $('#logo1').each(function() {
        animationHover(this, 'bounce');
    });
    $('#logo2').each(function() {
        animationClick(this, 'shake');
    });
    $('#logo3').each(function() {
        animationClick(this, 'swing');
    });
});


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