function myFunction () {
  var str = "This text is red";
  var result = str.fontcolor("red");
  document.getElementById("myPara").innerHTML = result;
}

function myFunc2() {
  var str = "The dog is ";
  str += "brown";
  str += ".";
  document.getElementById("myPara2").innerHTML = str;
}

function changeText() {
  var str = "New Text";
  str = str.fontcolor("red");
  document.getElementById("myPara3").innerHTML = str;
}