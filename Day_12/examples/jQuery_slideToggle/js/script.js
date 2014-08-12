/*JavaScript here*/

/*Welcome to jQuery*/

$(document).ready(function(){
  $("#flip").click(function(){
    $("#panel").slideToggle("slow");
  });
});


// function slideDown (element, duration, finalheight, callback) {
//     var s = element.style;
//     s.height = '0px';

//     var y = 0;
//     var framerate = 10;
//     var one_second = 1000;
//     var interval = one_second*duration/framerate;
//     var totalframes = one_second*duration/interval;
//     var heightincrement = finalheight/totalframes;
//     var tween = function () {
//         y += heightincrement;
//         s.height = y+'px';
//         if (y<finalheight) {
//             setTimeout(tween,interval);
//         }
//     }
//     tween();
// }