/*JavaScript here*/

/*Welcome to jQuery*/

$(document).ready(function(){
  $("#why-link").click(function(){
    // $("#why").slideToggle("slow");
    $("#why").slideDown();
    // $("#what").slideUp();
    // $("#where").slideUp();
    // $("#where").css("display","none");
    // $("#what").css("display","none");

  });

  $("#what-link").click(function(){
    $("#what").slideToggle("slow");
    // $("#what").slideDown();
    // $("#why").slideUp();
    // $("#where").slideUp();
    // $("#where").css("display","none");
    // $("#why").css("display","none");
  });

  $("#where-link").click(function(){
    $("#where").slideToggle("slow");
    // $("#where").slideDown();
    // $("#what").slideUp();
    // $("#why").slideUp();
    // $("#why").css("display","none");
    // $("#what").css("display","none");
  });




});

