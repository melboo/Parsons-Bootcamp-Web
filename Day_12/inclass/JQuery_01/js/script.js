/*JavaScript here*/

/*Welcome to jQuery*/

/*Wait till DOM loaded*/
// $(document).ready(function(){
// 	$("p").click(function(){
// 		$(this).hide();
// 	});
// });


$(document).ready(function(){
	$("#flip").click(function(){
		$("#panel").slideToggle("fast");
	});
});
