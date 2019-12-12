var Vehicle = {
  type: "car",
};

/* Use the typeof operator: */
document.write(typeof Vehicle + "<br>");

/* Use the isNaN function to return true */
document.write("0/0 isn't a number? " + isNaN(0/0) + "<br>");

/* Use the isNaN function to return false */
document.write("007 string isn't a number? " + isNaN("007") + "<br>");

/* Use boolean logic to return true and false: */
document.write((25 > 100) + "<br>");
document.write((3500 > 27) + "<br>");

/* Write a math operation to the console: */
console.log(8*7);

/* Examples of type conversion: */
document.write(("10" + 5) + "<br>");
document.write((true + false) + "<br>");
document.write((12 / "6") + "<br><br>");

/* Display False in the console using Boolean Logic */
console.log(3 < 1);

/* Use the comparison operator, '==', to return true and false. This checks that values of each are true. */
document.write("The following is true: " + ("10" == 10) + "<br>");
document.write("The following is false: " + (10 == 5) + "<br>");
document.write("The following is true: " + (10 == 10) + "<br><br>");

/* Use the comparison operator, '===', to return if both the types match and the values are the same: */
var a = 10;
var b = 10;
var s = "10";
var c = 11;

document.write("Comparing both type and values of a and b using '===' (same data type and same value, expect true):" + (a === b) + "<br>");
document.write("Comparing both type and value of s and c using '===' (different data type, different value, expect false): " + (s === c) + "<br>");
document.write("Comparing both type and value of b and s using '===' (different data type, same value, expect false): " + (b === s) + "<br>");
document.write("Comparing both type and value of b and c using '===' (same data type, different value, expect false): " + (b === c) + "<br><br>");

/* Use the && and || operators to return both true and false */
document.write("Should be true: " + (5 > 4 && 7 > 1) + "<br>");
document.write("Should be false: " + (5 < 4 && 7 > 1) + "<br>");
document.write("Should be true: " + (5 > 4 || 7 > 1) + "<br>");
document.write("Should be true: " + (5 < 4 || 7 > 1) + "<br>");
document.write("Should be false: " + (5 < 4 || 7 < 1) + "<br><br>");

/* Use the ! operator to return both true and false */
document.write("Using !, Should be true: " + !(5 > 7) + "<br>");
document.write("Using !, Should be false: " + !(5 > 2) + "<br><br>");


/* Display Positive and Negative Infinity */
function plusMinusInf () {
  document.getElementById("PMInf").innerHTML = "Positive Infinity: " + 2.0E308 + "<br>Negative Infinity: " + -2.0E308;
}