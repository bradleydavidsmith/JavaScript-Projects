/* Global Variable */
var i = 1;

function A () {
  /* Local Variable */
  var j = 2;
  console.log("Got to pt 1");
  /* intentional error, k is undefined, check console: */
  /* document.writeln(k); */

}

function currentHours() {
  h = new Date().getHours();
  document.getElementById("DatePlay").innerHTML = h;
}

/* Example of if-then-else */
function checkSpeed() {
  var Speed, Eval;
  Speed = document.getElementById("iSpeed").value;
  if (Speed <= 55) {
    Eval = "Good job! Keep it safe!";
  } else {
    Eval = "You were speeding! Unsafe!"
  }
  document.getElementById("SpeedEval").innerHTML = Eval;
}

/* Example of an if-then-else */
if (5 > 2) {
  document.writeln("left is greater");
} else {
  document.writeln("right is greater");
}

/* Example of ELSE-IF STATEMENTS */
function Time_function () {
  var Time = new Date().getHours();
  var Reply;
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!";
  } else if (Time > 12 == Time < 18) {
    Reply = "It is the afternoon.";
  } else {
    Reply = "It is evening time.";
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}

A();