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

  $(document).ready(function(){
    $("button").click(function(){
      $(".test").hide();
    });
  });


  $(document).ready(function(){
    $("#intro").css("background-color", "yellow");
  });

  $(document).ready(function(){
    $("p:hidden").show(3500);
  });

  
$(document).ready(function(){
  $(":selected").css("background-color", "red");
});


$(document).ready(function(){
  $("button").click(function(){
    $("#w3s").attr("href", "https://www.w3schools.com/jquery/");
  });
});

$(document).ready(function(){
  $("#btn1").click(function(){
    $("p").append(" <b>This text was appended using Jquery</b>.");
  });
  $("#btn2").click(function(){
    $("ol").append("<li>This item was appended using Jquery</li>");
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").remove();
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("div").animate({left: '250px'});
  });
});