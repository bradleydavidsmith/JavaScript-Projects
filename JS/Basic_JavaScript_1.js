//alert("Hello, World!");
//window.alert("World 2!");
document.write("World 3!<br>");

var a = "This is a string<br>";
var b = "Lisa told Bart, \"Knock it off, Bart! Or I'll tell dad!\"<br>\"Eat my shorts!\" Bart responded.";
var c = "Concatenated " + "String";
var dog1 = "Fido", dog2 = "Rex", dog3 = "Spot", cat1 = "Fluffy", cat2 = "Lady";
var dog1C = dog1.fontcolor("green");
var dog2C = dog2.fontcolor("red");
var dog3C = dog3.fontcolor("yellow");
var cat1C = cat1.fontcolor("blue");
var cat2C = cat2.fontcolor("brown");

document.write(a);
//window.alert(a);
document.write(b+"<br>");

// Concatenation
document.write("\"Be who you are and say what you feel,"
+ " because those who mind don't matter and those who matter don't mind.\""
+ "-Dr. Seuss<br>");
document.write(c+"<br>");

document.write(dog2C+"<br>");

// Expressions
document.write(7+8+"<br>");
document.write(7/3+"<br>");
document.getElementById("Green_Text").textContent = c;

// Functions
function myFirstFunction() {
  var str = "This text is green";
  var result = str.fontcolor("green");
  document.getElementById("Green_Text").innerHTML = result;
  //The other way:
  //document.getElementById("Green_Text").textContent = str;
  //document.getElementById("Green_Text").style.color="green";
}

