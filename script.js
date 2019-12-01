
//Capture that the document is available and that JavaScript has started successfully
window.onload = function() {
   
    window.alert("The document is available and JS native has started succesfully")
//     clicked.onclick() = alert("Click event triggered with JavaScript")
  document.getElementById("changeStyle").addEventListener("click", changeStyle, true);
}

//Capture that an item has been clicked
function captureItemOnClick() {
    document.getElementById("captureonclick").innerHTML = "Hello World";
}

//Capture that “hover” has been made on an item
function bigImg(x) {
x.style.height = "64px";
x.style.width = "64px";
}
function normalImg(x) {
x.style.height = "32px";
x.style.width = "32px";
}

//Capture when the user has pressed a key and obtain the code associated with that key
function getKeyCode(event) {
    var x = event.which || event.keyCode;
    document.getElementById("getkeycode").innerHTML = "The Unicode value is: " + x;
}

//Capture when the user moves the mouse and get the current position of it
function showCoords(event) {
    var x = event.clientX;
    var y = event.clientY;
    var coords = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = coords;
}

//PENDING: Capture when an event has been carried out on several elements without the need to associate the event to each element separately.

//Hide and Show a certain item
function hideAndShow() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

//PENDING: Get all the elements of a certain class (we refer to css class)
function addTextToP(){
  var addtextelements = document.getElementsByClassName("addtext");
  for (let i = 0; i < addtextelements.length; i++) {
    addtextelements[i].innerHTML = "We were all selected for having the same class";
  }
}

//PENDING: Show an element animatedly with a molten effect

//PENDING: Hide an element in an animated way with a molten effect

//PENDING: Iterate a collection of elements and apply a change of style on them
function changeStyle(){
  var array = document.getElementsByClassName("changeStyle");
  for (let i = 0; i < array.length; i++) {
    var a = Math.floor(Math.random() *3 + 1)
  if(a == 1){
    array[i].style = "background-color:red";
  }
  if(a == 2){
    array[i].style = "background-color:yellow";
  }
  if(a == 3){
    array[i].style = "background-color:purple";
  }
};
}

//Obtain the parent element of a certain element
function obtainParent() {
  var x = document.getElementById("myLI").parentElement.nodeName;
  document.getElementById("parentNode").innerHTML = x;
}


//Obtain the collection of children of a certain element (if that element has children)
function getChildNodes() {
  var list = document.getElementById("myList").hasChildNodes();
  document.getElementById("haschildnodes").innerHTML = list;
}

//Get an item by its ID
function changeText() {
  document.getElementById("changetext").innerHTML = "Hello World";
}

//PENDING: Obtain all the elements of a certain class that are also hidden (the fact that they are hidden will not be obtained through a css class)


//PENDING: Change the href attribute of the first <a> element (Create an <a> element to test this case)
function changeHrefAttribute() {
    document.getElementById("myAnchor").setAttribute("href", "https://www.w3schools.com"); 
  }


//Create a new <p> element with text inside the dom of your page

  var para = document.createElement("p");
  var node = document.createTextNode("This is new paragraph created with the createTextNode Method.");
  para.appendChild(node);
  var element = document.getElementById("div1");
  element.appendChild(para);


//PENDING: Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)


// //PENDING Remove all elements of a specific selector
// function removeElements() {
//     var list = document.getElementsByClassName("element");
//     list.removeChild(list.childNodes[]);
//   }


//PENDING Animate an item after 2 seconds from the initial page load


// Finally investigate how you can create your own plugin, so that:
// Given a name, surname, create a clear and organized HTML element.
// This plugin must be configurable and allow two types of design with image on the left or image on the right.

// }


// function bigImg(x) {
//     x.style.height = "64px";
//     x.style.width = "64px";
// }
// function normalImg(x) {
//     x.style.height = "32px";
//     x.style.width = "32px";
// }


// function myFunction(e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     var coor = "Coordinates: (" + x + "," + y + ")";
//     document.getElementById("demo").innerHTML = coor;
// }


// $(document).ready(function(){
//     $("span").parent().css({"color": "red", "border": "2px solid red"});
// });


// function getParent() {
//     var x = document.getElementById("myLI").parentElement.nodeName;
//     document.getElementById("demo").innerHTML = x;
// }


// function myFunction() {
//     var x = document.getElementsByClassName("example");
//     x[0].innerHTML = "Hello World!";
// }