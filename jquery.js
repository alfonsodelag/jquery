// $(document).ready(function(){
//     window.alert("The document is available and Jquery has started succesfully");
// });


// $(document).ready(function(){
//     $("button").click(function(){
//       $("p").click();
//     });
//   });

// $(document).ready(function(){
//     $("span").hover(function(){
//       $(this).css("background-color", "yellow");
//       }, function(){
//       $(this).css("background-color", "pink");
//     });
// });

$("#input-field").keyup(function(){
    alert("you pressed the key " + event.which);
});