function Call_Loop() {
  var start = 10;
  var end = 0;
  var countdown = "";
  var i = start;
  while(i >= end) {
    countdown += i + "<br>";
    i -= 1;
  }
  document.getElementById("Loop").innerHTML = countdown;
}

var Instruments = ["Guitar", "Drums", "Piano", "Clarinet", "Violin", "Flute"];

function for_Loop() {
  var iList = "";
  var i;
  for (i = 0; i < Instruments.length; i += 1) {
    iList += Instruments[i] + "<br>";
  }
  document.getElementById("List_Of_Instruments").innerHTML = iList;
}

var str = "This is my string!";
var str2 = "";

/* The string length property returns the number of 
   characters in a string, or zero if the string is
   empty. */
document.write("<br>");
document.write("The length of str is: " + str.length + ". <br>");
document.write("The length of str2 is:" + str2.length + ". <br>");

/* Access the elements of an array */
function array_Function() {
  document.getElementById("Array").innerHTML = Instruments[0] + ", " + Instruments[1];
}

/* Use a constant */
const Musical_Instrument = {type: "guitar", brand: "Fender", color: "black"};
function constant_function() {
  document.getElementById("Constant").innerHTML = Musical_Instrument.type + ", " + Musical_Instrument.brand;
}

function constant_function2() {
  Musical_Instrument.color = "blue";
  Musical_Instrument.price = "$400";
  document.getElementById("Constant2").innerHTML = Musical_Instrument.color + ", " + Musical_Instrument.price;
}

/* Difference between 'var' and 'let' statements: */
var x = 55;
{
  var x = 65;
}
document.write("x = " + x + "<br>");

var y = 55
{
  let y = 65;
}
document.write("y = " + y + "<br>");

/* Use of the 'return' statement */
function myNamingFunc(name) {
  return "Hello, " + name;
}

document.write(myNamingFunc("John") + "<br>");

let person = {
  name: "Fred",
  age: 46,
  sex: "Male",
  description : function() {
    return "This person is named " + this.name + ", age " + this.age + ", whose sex is " + this.sex +".";
  }
};
document.getElementById("Person_Object").innerHTML = person.description();

/* Use the Break statement */
var searchItem = "Piano";
var searchResult = 0
var outstr = "";

for (var i = 0; i < Instruments.length; i += 1) {
  if (Instruments[i] == searchItem) { 
    searchResult = i;
    break;
  };
}

if  (searchResult == 0) {
  outstr = "Search Item not found";
} else {
  outstr = searchItem + " is item number " + searchResult;
}

document.write(outstr + "<br>");

/* Use the continue statement, put out a count skipping the number 3 */
var skip = 3;
var outstr = "";

for (var i = 0; i < 10; i += 1) {
  if (i == 3) { continue; }
  outstr += i + "<br>";
}

document.write(outstr);