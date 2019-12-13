/* STRING METHODS*/
/* Use the concat() method of the string type. */
function aSentence() {
  var part1 = "The rain";
  var part2 = "in Spain";
  var part3 = "falls mainly";
  var part4 = "on the plain.";
  var wholeSent = part1.concat(" ", part2, " ", part3, " ", part4);
  document.getElementById("Concat").innerHTML = wholeSent;
}

/* Use the slice() method of the string type. */
function slice_Method() {
  var mySentence = "The rain in Spain falls mainly on the plain.";
  var mySection = mySentence.slice(12,17);
  document.getElementById("Slice").innerHTML = mySection;
}

/* toUpperCase() converts all the letters in a string to upper case. */
/* toLowerCase() converts all the letters in a string to lower case. */
/* Use the toUpperCase() and toLowerCase() methods of the string type. */

var mixedCaseString = "mY MiXed CasE STRing.";
document.write(mixedCaseString.toUpperCase() + "<br/>");
document.write(mixedCaseString.toLowerCase() + "<br/>");

/* The search() searches the string for a specified value, and returns the position
   of the match, or -1 if not found.                                                */

var attackIt = "We have you now, Mr. Bond";
var locateIt = attackIt.search("Bond");
document.write(locateIt + "<br/>");


/* NUMBER METHODS */
/* Use the toString() method: */
function string_Method() {
  var X = 100000000;
  document.getElementById("Numbers_to_string").innerHTML = X.toString();
}
var Y = 78786590;
document.write(Y.toString() + " " + typeof Y.toString() + "<br>");

/* use the toPrecision() method: */
var Z = 1234.567890123456;
document.writeln(Z.toPrecision(7) + "<br>");
document.writeln(Z.toPrecision(9) + "<br>");
document.writeln(Z.toPrecision(3) + "<br>");

/* The toFixed() method converts a number to a string, keeping n number of decimals. */
function fixedFunc() {
  var num = 123.456789012;
  document.getElementById("fixedNum").innerHTML = num.toFixed(3);
}

document.write(("100" + "23").valueOf() + "<br>");