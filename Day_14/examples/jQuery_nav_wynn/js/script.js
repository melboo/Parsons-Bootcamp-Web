/*JavaScript here*/

/*Welcome to jQuery*/

/*still one problem, how get the nav back :) */

var next_move = "expand";

$(document).ready(function(){
    
  var allPanels = $('nav > .page').hide();
    
  $('nav > .link > a').click(function() {
    allPanels.slideUp();
    $(this).parent().next().slideDown();
    return false;
  });

  $(".nav-icon").click(function()
	{
	    var css = {};
	    var css2 = {};
	    if (next_move == "expand"){
	        css = {
	            right: '300px'
	        };
	        css2 = {
	            right: '0px'
	        };
	        next_move = "shrink";
	    } else {
	        css = {
	            right: '0px'
	        };  
	        css2 = {
	            right: '-300px'
	        };     
	        next_move = "expand";
	    }
	    $(this).animate(css, 200);
	    $(".overlay").animate(css2, 200);
	});



});