$(document).ready(function(){
    window.alert("The document is available and Jquery has started succesfully");
});


$(document).ready(function(){
    $("button").click(function(){
      $('#click-event').click();
    });
  });


$(document).ready(function(){
    $("span").hover(function(){
      $(this).css("background-color", "yellow");
      }, function(){
      $(this).css("background-color", "pink");
    });
});


$("#input-field").keyup(function(){
    alert("you pressed the key " + event.which);
});


$(document).ready(function(){
    $(document).mousemove(function(event){
    $("span").text(event.pageX + ", " + event.pageY);
});
});


$(document).ready(function(){
    $("#hide").click(function(){
      $("#hideShow").hide();
    });
    $("#show").click(function(){
      $("p").show();
    });
});


$(document).ready(function(){
    $("button").click(function(){
      $("li").each(function(){
        alert($(this).text())
      });
    });
  });


  $(document).ready(function(){
    $("span").parent().css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("ul").children().css({"color": "red", "border": "2px solid red"});
  });

  $(document).ready(function(){
    $("ul").children().css({"color": "red", "border": "2px solid red"});
  });


  $(document).ready(function(){
    $("button").click(function(){
      alert($("p").hasClass("intro"));
    });
  });