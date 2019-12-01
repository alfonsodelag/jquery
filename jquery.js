//Capture that the document is available and that JQuery has started successfully
$(document).ready(function(){
    window.alert("The document is available and Jquery has started succesfully");

//Capture that an item has been clicked
    $("#click-event").click(function(){
      alert('Click event triggered with Jquery')
    });

//Capture that “hover” has been made on an item
    $("span:eq(0)").hover(function(){
      $(this).css("background-color", "yellow");
    }, function(){
      $(this).css("background-color", "pink");
    });

//Capture when the user has pressed a key and obtain the code associated with that key
    $("#input-field").keyup(function(){
      alert("you pressed the key " + String.fromCharCode(event.which) +  " the unicode is: " + event.which);
    });

//Capture when the user moves the mouse and get the current position of it
    $(".coordinates:eq(1)").mousemove(function(event){
      $(".coordinates:eq(0)").text(event.pageX + ", " + event.pageY);
    });
    
//Hide and show an element
  $("#hide").click(function(){
    $("#hideShow").hide();
  });

  $("#show").click(function(){
    $("#hideShow").show();
  });

//Iterate a collection of elements and apply a change of style on them
  $(".changeStyle").click(function(){
    $(".changeStyle").each(function(){
      $(this).css("background-color", "yellow");
      if($(this).text() == "Item 2") {
        $(this).css("background-color", "blue");
      }   
    })
  });

//Obtain parent
$(".childrenul").click(function(){
  $(this).parent().css({"color": "red", "border": "2px solid red"});
});

  // $("ul").children().css({"color": "red", "border": "2px solid red"});

//Get all the elements of a certain class (we refer to css class)
  $("button").click(function(){
    alert($("p").hasClass("intro"));
  });

  $("button").click(function(){
    $(".test").hide();
  });

  $("#intro").css("background-color", "yellow");

  $("p:hidden").show(3500);

//Get those options of a selected element that are selected (attribute selected)
$(":selected").css("background-color", "red");

//Change the href attribute of the first <a> element (Create an <a> element to test this case)
$("button").click(function(){
$("#w3s").attr("href", "https://www.w3schools.com/jquery/");
});

$("#btn1").click(function(){
$("p").append(" <b>This text was appended using Jquery</b>.");
});

$("#btn2").click(function(){
$("ol").append("<li>This item was appended using Jquery</li>");
});

//Remove all elements of a specific selector
$("button").click(function(){
$("#div1").remove();
});

 

  $("#element-events").bind("select keydown click", function(e){
  $(this).children().first().text("JQ, the event type is: " + e.type)
  });
  
// //Get all the elements of a certain class (we refer to css class)
$("#classbutton").click(function(){
  $("#hasclass:p").hasClass("intro");
});




});

  


// //Capture when the user has pressed a key and obtain the code associated with that key
// $("#input-field").keyup(function(){
//     alert("you pressed the key " + event.which);
// });

// //Capture when the user moves the mouse and get the current position of it
// $(document).ready(function(){
//     $(document).mousemove(function(event){
//     $("span").text(event.pageX + ", " + event.pageY);
// });
// });

// //PENDING Capture when an event has been carried out on several elements without the need to associate the event to each element separately.


// //PENDING Show an element animatedly with a molten effect
// //PENDING Hide an element in an animated way with a molten effect

// $(document).ready(function(){
//     $("button").click(function(){
//       $("li").each(function(){
//         alert($(this).text())
//       });
//     });
// });

// //Obtain the parent element of a certain element (in this case, span)
//   $(document).ready(function(){
//     $("span").parent().css({"color": "red", "border": "2px solid red"});
//   });

// //Obtain the collection of children of a certain element (if that element has children)
//   $(document).ready(function(){
//     $("ul").children().css({"color": "red", "border": "2px solid red"});
//   });





//   //?
//   $(document).ready(function(){
//     $("button").click(function(){
//       $(".test").hide();
//     });
//   });


//   $(document).ready(function(){
//     $("#intro").css("background-color", "yellow");
//   });

// //Obtain all the elements of a certain class that are also hidden (the fact that they are hidden will not be obtained through a css class)
//   $(document).ready(function(){
//     $("p:hidden").show(3500);
//   });

// //Get those options of a selected element that are selected (attribute selected)
// $(document).ready(function(){
//   $(":selected").css("background-color", "red");
// });


// //Change the href attribute of the first <a> element (Create an <a> element to test this case)
// $(document).ready(function(){
//   $("button").click(function(){
//     $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
//   });
// });

// //Create a new <p> element with text inside the dom of your page
// $(document).ready(function(){
//   $("#btn1").click(function(){
//     $("p").append(" <b>This text was appended using Jquery</b>.");
//   });
//   $("#btn2").click(function(){
//     $("ol").append("<li>This item was appended using Jquery</li>");
//   });
// });

// //Remove all elements of a specific selector
// $(document).ready(function(){
//   $("button").click(function(){
//     $("#div1").remove();
//   });
// });

// //Animate an item after 2 seconds from the initial page load
// $(document).ready(function(){
//   $("button").click(function(){
//     $("div").animate({left: '250px'});
//   });
// });