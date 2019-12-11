function add () {
  var addition = 1 + 1;
  document.getElementById("Math").innerHTML = addition;
}

function subFunc () {
  var sub = 10-1;
  document.getElementById("Sub").innerHTML = sub;
}

function multFunc () {
  var mult = 10*8;
  document.getElementById("Mult").innerHTML = "10 * 8 = " + mult;
}

function divFunc () {
  var div = 50/5;
  document.getElementById("Div").innerHTML = "50 / 5 = " + div;
}

function multMathOps () {
  mulMath = 5 + 10 - 15 * 20 / 25 % 30;
  document.getElementById("Mul").innerHTML = "5+10-15*20/25%30 = " + mulMath;
}

function modOp () {
  var divOp = 25 % 7;
  document.getElementById("Mod").innerHTML = "The remainder of 25 / 7 is " + divOp;
}

function negOp () {
  var negOp = -18
  document.getElementById("Neg").innerHTML = "The negative of 18 is " + negOp;
}

function incrDecrOps () {
  var num = 10, numIncr = num, numDecr = num;
  numIncr++;
  numDecr--;
  document.getElementById("IncrDecr").innerHTML = "The increment of " + num + " is " + numIncr +
    ". The decrement of " + num + " is " + numDecr + ".";
}

function mathRandFunc() {
  var randNumber = Math.random() * 100;
  document.getElementById("RandFunc").innerHTML = "A random number between 1 and 100: " + randNumber;
}

function mathFun() {
  var sqrt2m = Math.SQRT2;
  var sqrt2c = Math.sqrt(2);
  document.getElementById("MathFun").innerHTML = "The sqrt(2), 2 ways: " + sqrt2m + " " + sqrt2c;
}