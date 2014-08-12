/*JavaScript here*/

/*Welcome to jQuery*/

// Basic syntax is: $(selector).action()

// A $ sign to define/access jQuery
// A (selector) to "query (or find)" HTML elements
// A jQuery action() to be performed on the element(s)

//Click == Event look up on w3school

//Hide === effects

$(document).ready(function(){
  $("p").click(function(){
    $("#myP").hide();
  });
});

// $(document).ready(function(){
//   $("p").click(function(){
//     $(this).hide();
//   });
// });


// $(document).ready(function(){
//   $("button").click(function(){
//     $("p").toggle(speed,callback);
//   });
// });

// The optional speed parameter can take the following values: "slow", "fast", or milliseconds.

// The optional callback parameter is a function to be executed after toggle() completes.