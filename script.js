window.onload = function() {
   
    window.alert("The document is available and JS native has started succesfully")

};


function myFunction() {
   var clicked = document.getElementById("paragraph").click();
    clicked.onclick() = alert("Click event triggered with JavaScript")
}


function bigImg(x) {
    x.style.height = "64px";
    x.style.width = "64px";
}
function normalImg(x) {
    x.style.height = "32px";
    x.style.width = "32px";
}


function myFunction(e) {
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("demo").innerHTML = coor;
}


$(document).ready(function(){
    $("span").parent().css({"color": "red", "border": "2px solid red"});
});


function getParent() {
    var x = document.getElementById("myLI").parentElement.nodeName;
    document.getElementById("demo").innerHTML = x;
}


function myFunction() {
    var x = document.getElementsByClassName("example");
    x[0].innerHTML = "Hello World!";
}