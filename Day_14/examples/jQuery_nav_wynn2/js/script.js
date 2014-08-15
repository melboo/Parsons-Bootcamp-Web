/*JavaScript here*/

/*Welcome to jQuery*/

var next_move = "expand";
var next_move2 = "expand";

$(document).ready(function(){
    

/* Click on Icon*/
  $(".nav-icon").click(function()
	{
	    var css = {};
	    var cssNav = {};
	    var cssContent = {};
	    if (next_move == "expand"){
	        css = {
	            right: '200px' //with navigation
	        };
	        cssNav = {
	            right: '0px'
	        };
	        next_move = "shrink";
	    } else {
	        css = {
	            right: '0px'
	        };  
	        cssNav = {
	            right: '-200px' //with navigation
	        };    
	        cssContent = {
	            right: '-500px' //with content
	        }; 
	        next_move = "expand";
	        console.log("out of here");
	    }
	    $(this).animate(css, 200);
	    $(".overlay").animate(cssNav, 200);
	    $(".content").animate(cssContent, 200);
	});


/*Click on Nav */
  $('nav > .link > a').click(function()
	{
	    var css = {};
	    var cssNav = {};
	    var cssContent = {}
	    if (next_move2 == "expand"){
	         css = {
	             right: '700px' //width navigation + content
	         };
	         cssNav = {
	             right: '500px' //width content
	         };
	        cssContent = {
	            right: '0px'
	        }; 
	        $('#l-1').click(function()
			{
				$("#c-1").show();
				$("#c-2").hide();
				$("#c-3").hide();
			});
			$('#l-2').click(function()
			{
				$("#c-2").show();
				$("#c-1").hide();
				$("#c-3").hide();
			});
			$('#l-3').click(function()
			{
				$("#c-3").show();
				$("#c-2").hide();
				$("#c-1").hide();
			});
	    } else {
	        console.log("next_content");
	    }
	    $(".nav-icon").animate(css, 200);
	    $(".overlay").animate(cssNav, 200);
	    $(".content").animate(cssContent, 200);
	});


});